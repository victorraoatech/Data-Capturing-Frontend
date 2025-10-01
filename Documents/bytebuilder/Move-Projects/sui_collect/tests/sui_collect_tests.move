#[test_only]
module sui_collect::sui_collect_tests {
    use sui_collect::sui_collect::{
        E_DUPLICATE, E_NOT_LISTED,
        init_registry, init_collection, init_kiosk,
        mint_into_collection, list, delist, burn,
        get_nft_info
    };
    use sui::test_scenario as test;
    use std::string;

    /// Helper: build a 32-byte vector<u8> filled with the seed
    fun make_hash(seed: u8): vector<u8> {
        let mut v = vector::empty<u8>();
        let mut i = 0;
        while (i < 32) {
            vector::push_back(&mut v, seed);
            i = i + 1;
        };
        v
    }

    /// Dummy address to transfer objects to in tests
    const DUMMY_ADDRESS: address = @0xDEADBEEF;

    #[test]
    fun test_mint_success() {
        let mut scenario = test::begin(@0xA);
        let ctx = test::ctx(&mut scenario);

        let mut registry = init_registry(ctx);
        let mut collection = init_collection(
            @0xA,
            string::utf8(b"My Collection"),
            5,
            false,
            500,
            ctx
        );

        let hash = make_hash(1);
        let cid = b"CID1";

        let nft = mint_into_collection(&mut registry, &mut collection, hash, cid, ctx);

        let (_col_addr, creator, content_hash, _cid, edition) = get_nft_info(&nft);
        assert!(creator == @0xA, 1);
        assert!(edition == 1, 2);
        assert!(content_hash == hash, 3);

        // Consume objects by transferring to a dummy address
        transfer::public_transfer(nft, DUMMY_ADDRESS);
        transfer::public_transfer(collection, DUMMY_ADDRESS);
        transfer::public_transfer(registry, DUMMY_ADDRESS);

        test::end(scenario);
    }

    #[test, expected_failure(abort_code = E_DUPLICATE)]
    fun test_mint_duplicate_should_abort() {
        let mut scenario = test::begin(@0xA);
        let ctx = test::ctx(&mut scenario);

        let mut registry = init_registry(ctx);
        let mut collection = init_collection(
            @0xA,
            string::utf8(b"My Collection"),
            5,
            false,
            500,
            ctx
        );

        let hash = make_hash(2);
        let cid1 = b"CID-A";
        let cid2 = b"CID-B";

        let nft1 = mint_into_collection(&mut registry, &mut collection, hash, cid1, ctx);

        // Second mint with same hash should abort
        let nft2 = mint_into_collection(&mut registry, &mut collection, hash, cid2, ctx);

        // Consume objects (though test should abort before this)
        transfer::public_transfer(nft1, DUMMY_ADDRESS);
        transfer::public_transfer(nft2, DUMMY_ADDRESS);
        transfer::public_transfer(collection, DUMMY_ADDRESS);
        transfer::public_transfer(registry, DUMMY_ADDRESS);

        test::end(scenario);
    }

    #[test]
    fun test_list_delist_and_burn_flow() {
        let mut scenario = test::begin(@0xA);
        let ctx = test::ctx(&mut scenario);

        let mut registry = init_registry(ctx);
        let mut collection = init_collection(
            @0xA,
            string::utf8(b"Test Collection"),
            10,
            false,
            0,
            ctx
        );
        let mut kiosk = init_kiosk(ctx);

        // Mint and list first collectible (consumed by list)
        let hash = make_hash(3);
        let cid = b"CID-3";
        let nft = mint_into_collection(&mut registry, &mut collection, hash, cid, ctx);
        list(&mut kiosk, nft, 50, ctx);

        // Mint second collectible (we keep handle so we can compute id before listing)
        let hash2 = make_hash(4);
        let cid2 = b"CID-4";
        let nft2 = mint_into_collection(&mut registry, &mut collection, hash2, cid2, ctx);

        // Compute id, then list and delist by owner
        let nft2_id = object::id(&nft2);
        list(&mut kiosk, nft2, 60, ctx);

        let nft_back = delist(&mut kiosk, nft2_id, ctx);
        let (_col_addr, _creator, _h, _c, edition_back) = get_nft_info(&nft_back);
        assert!(edition_back >= 1, 10);

        // Consume returned collectible via burn
        burn(nft_back, ctx);

        // Consume remaining objects
        transfer::public_transfer(kiosk, DUMMY_ADDRESS);
        transfer::public_transfer(collection, DUMMY_ADDRESS);
        transfer::public_transfer(registry, DUMMY_ADDRESS);

        test::end(scenario);
    }

    #[test, expected_failure(abort_code = E_NOT_LISTED)]
    fun test_delist_not_listed_aborts() {
        let mut scenario = test::begin(@0xA);
        let ctx = test::ctx(&mut scenario);

        let mut registry = init_registry(ctx);
        let mut collection = init_collection(
            @0xA,
            string::utf8(b"Owner Test"),
            5,
            false,
            0,
            ctx
        );
        let mut kiosk = init_kiosk(ctx);

        // Mint a collectible but do NOT list it
        let hash = make_hash(5);
        let cid = b"CID-5";
        let nft = mint_into_collection(&mut registry, &mut collection, hash, cid, ctx);

        // Compute its id (object exists but isn't listed)
        let nft_id = object::id(&nft);

        // Attempting to delist an id that isn't listed should abort with E_NOT_LISTED
        let nft_back = delist(&mut kiosk, nft_id, ctx);

        // If delist did not abort (it will), consume the returned value
        burn(nft_back, ctx);

        // Consume remaining objects
        transfer::public_transfer(nft, DUMMY_ADDRESS);
        transfer::public_transfer(kiosk, DUMMY_ADDRESS);
        transfer::public_transfer(collection, DUMMY_ADDRESS);
        transfer::public_transfer(registry, DUMMY_ADDRESS);

        test::end(scenario);
    }
}