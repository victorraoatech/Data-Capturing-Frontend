module sui_collect::sui_collect {
    use std::string;
    use sui::table::Table;
    use sui::tx_context::sender;
    use sui::table;
    use sui::event;
    use sui::coin;
    use sui::coin::Coin; 
    use sui::sui::SUI;


    const E_DUPLICATE: u64 = 1;
    const E_NOT_OWNER: u64 = 2;
    const E_NOT_LISTED: u64 = 3;
    const E_ALREADY_LISTED: u64 = 4;
    const E_COLLECTION_FULL: u64 = 5;
    const E_NOT_COLLECTION_ADMIN: u64 = 6;
    const E_INSUFFICIENT_PAYMENT: u64 = 7;
    const E_INVALID_HASH_LENGTH: u64 = 8;

    public struct MintEvent has copy, drop {
        creator: address,
        collection: address,
        content_hash: vector<u8>, 
        cid: vector<u8>,        
        edition: u64,
    }

    public struct TransferEvent has copy, drop {
        from: address,
        to: address,
        nft_id: ID,
    }

    public struct ListEvent has copy, drop {
        seller: address,
        nft_id: ID,
        price: u64,
    }

    public struct BuyEvent has copy, drop {
        buyer: address,
        seller: address,
        nft_id: ID,
        price: u64,
        royalty_paid: u64,
    }

    public struct BurnEvent has copy, drop {
        owner: address,
        nft_id: ID,
        collection: address,
    }

    public struct Collectible has key, store {
        id: UID,
        collection_addr: address,
        creator: address,
        content_hash: vector<u8>,
        cid: vector<u8>,
        edition: u64,
    }

    public struct Registry has key, store { // Added 'store'
        id: UID,
        hashes: Table<vector<u8>, bool>,
    }

    public struct Collection has key, store { // Added 'store'
        id: UID,
        admin: address,
        name: string::String,
        max_editions: u64,
        minted_count: u64,
        allow_derivatives: bool,
        royalty_percentage: u64,
    }

    public struct Listing has key, store {
        id: UID,
        nft: Collectible,
        price: u64,
        seller: address,
    }

    public struct Kiosk has key, store { // Added 'store'
        id: UID,
        listings: Table<ID, Listing>,
    }

    /// -------------------------
    /// Initialization helpers
    /// -------------------------
    public fun init_registry(ctx: &mut TxContext): Registry {
        Registry {
            id: object::new(ctx),
            hashes: table::new<vector<u8>, bool>(ctx),
        }
    }

    public fun init_collection(
        admin: address,
        name: string::String,
        max_editions: u64,
        allow_derivatives: bool,
        royalty_percentage: u64,
        ctx: &mut TxContext,
    ): Collection {
        assert!(royalty_percentage <= 10000, E_INSUFFICIENT_PAYMENT);
        Collection {
            id: object::new(ctx),
            admin,
            name,
            max_editions,
            minted_count: 0,
            allow_derivatives,
            royalty_percentage,
        }
    }

    public fun init_kiosk(ctx: &mut TxContext): Kiosk {
        Kiosk {
            id: object::new(ctx),
            listings: table::new<ID, Listing>(ctx),
        }
    }

    /// -------------------------
    /// Minting (duplicate-safe)
    /// -------------------------
    public fun mint_into_collection(
        registry: &mut Registry,
        collection: &mut Collection,
        content_hash: vector<u8>,
        cid: vector<u8>,
        ctx: &mut TxContext,
    ): Collectible {
        let caller = sender(ctx);
        assert!(caller == collection.admin, E_NOT_COLLECTION_ADMIN);

        assert!(vector::length(&content_hash) == 32, E_INVALID_HASH_LENGTH);

        if (collection.max_editions != 0) {
            assert!(collection.minted_count < collection.max_editions, E_COLLECTION_FULL);
        };

        assert!(!table::contains(&registry.hashes, content_hash), E_DUPLICATE);
        table::add(&mut registry.hashes, content_hash, true);

        let edition = collection.minted_count + 1;
        collection.minted_count = edition;

        let collection_addr = object::id_to_address(&object::id(collection));

        let nft = Collectible {
            id: object::new(ctx),
            collection_addr,
            creator: caller,
            content_hash,
            cid,
            edition,
        };

        event::emit(MintEvent {
            creator: caller,
            collection: collection_addr,
            content_hash: nft.content_hash,
            cid: nft.cid,
            edition,
        });

        nft
    }

    public fun mint_and_transfer(
        registry: &mut Registry,
        collection: &mut Collection,
        content_hash: vector<u8>,
        cid: vector<u8>,
        ctx: &mut TxContext,
    ): Collectible {
        mint_into_collection(registry, collection, content_hash, cid, ctx)
    }

    /// -------------------------
    /// Transfers
    /// -------------------------
    public fun safe_transfer(nft: Collectible, to: address, ctx: &mut TxContext) {
        let from = sender(ctx);
        let nft_id = object::id(&nft);
        event::emit(TransferEvent {
            from,
            to,
            nft_id,
        });
        transfer::public_transfer(nft, to);
    }

    /// -------------------------
    /// Burn NFT
    /// -------------------------
    public fun burn(nft: Collectible, ctx: &mut TxContext) {
        let caller = sender(ctx);
        let nft_id = object::id(&nft);
        let Collectible { id, collection_addr, creator: _, content_hash: _, cid: _, edition: _ } = nft;
        event::emit(BurnEvent {
            owner: caller,
            nft_id,
            collection: collection_addr,
        });
        object::delete(id);
    }

    /// -------------------------
    /// Kiosk (list, buy, delist)
    /// -------------------------
    public fun list(
        kiosk: &mut Kiosk,
        nft: Collectible,
        price: u64,
        ctx: &mut TxContext,
    ) {
        let seller = sender(ctx);
        let id = object::id(&nft);

        assert!(!table::contains(&kiosk.listings, id), E_ALREADY_LISTED);

        let listing = Listing {
            id: object::new(ctx),
            nft,
            price,
            seller,
        };

        table::add(&mut kiosk.listings, id, listing);
        event::emit(ListEvent { seller, nft_id: id, price });
    }

    #[allow(lint(self_transfer))]
    public fun buy(
        kiosk: &mut Kiosk,
        nft_id: ID,
        payment: &mut Coin<SUI>,
        collection: &Collection,
        ctx: &mut TxContext,
    ) {
        assert!(table::contains(&kiosk.listings, nft_id), E_NOT_LISTED);

        let listing = table::remove(&mut kiosk.listings, nft_id);
        let buyer = sender(ctx);
        let seller = listing.seller;
        let price = listing.price;
        let payment_amount = coin::value(payment);

        assert!(payment_amount >= price, E_INSUFFICIENT_PAYMENT);

        let royalty_amount = (price * collection.royalty_percentage) / 10000;
        let seller_amount = price - royalty_amount;

        let seller_payment = if (seller_amount > 0) {
            coin::split(payment, seller_amount, ctx)
        } else {
            coin::zero<SUI>(ctx)
        };

        let royalty_payment = if (royalty_amount > 0) {
            coin::split(payment, royalty_amount, ctx)
        } else {
            coin::zero<SUI>(ctx)
        };

        let payment_remaining = coin::value(payment);
        if (payment_remaining > 0) {
            let change = coin::split(payment, payment_remaining, ctx);
            transfer::public_transfer(change, buyer);
        };

        transfer::public_transfer(seller_payment, seller);
        transfer::public_transfer(royalty_payment, collection.admin);

        event::emit(BuyEvent {
            buyer,
            seller,
            nft_id,
            price,
            royalty_paid: royalty_amount,
        });

        let Listing { id, nft, price: _, seller: _ } = listing;
        object::delete(id);
        transfer::public_transfer(nft, buyer);
    }

    public fun delist(
        kiosk: &mut Kiosk,
        nft_id: ID,
        ctx: &mut TxContext,
    ): Collectible {
        assert!(table::contains(&kiosk.listings, nft_id), E_NOT_LISTED);
        let listing = table::remove(&mut kiosk.listings, nft_id);
        let caller = sender(ctx);
        assert!(caller == listing.seller, E_NOT_OWNER);

        let Listing { id, nft, price: _, seller: _ } = listing;
        object::delete(id);
        nft
    }

    /// -------------------------
    /// Public accessor functions
    /// -------------------------
    public fun get_collection_info(collection: &Collection): (address, string::String, u64, u64, bool, u64) {
        (
            collection.admin,
            collection.name,
            collection.max_editions,
            collection.minted_count,
            collection.allow_derivatives,
            collection.royalty_percentage,
        )
    }

    public fun get_nft_info(nft: &Collectible): (address, address, vector<u8>, vector<u8>, u64) {
        (nft.collection_addr, nft.creator, nft.content_hash, nft.cid, nft.edition)
    }
}