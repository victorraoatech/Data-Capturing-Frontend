import Ayodeji from "../assets/Ayodeji.jpg";
import Ope from "../assets/Ope.jpg";
import Victor from "../assets/Victor.jpg";
import Pelumi from "../assets/Pelumi.jpg";
import artGalleryPreview from "@/assets/art-gallery-preview.jpg";

import {
    Heart,
    Recycle,
    Share2,
    Users,
    Zap,
    Instagram,
    Twitter,
    Facebook,
    Youtube,
    LucideIcon,
} from "lucide-react";

// -------------------- FOOTER --------------------
export type FooterSection = {
    title: string;
    links: string[];
};

export type SocialLink = {
    icon: LucideIcon; // store component reference, not JSX
    href: string;
    label: string;
    color: string;
};

export const footerSections: FooterSection[] = [
    {
        title: "Programs",
        links: [
            "Youth Workshops",
            "Community Cleanups",
            "Art Gallery",
            "Leadership Training",
            "School Partnerships",
        ],
    },
    {
        title: "Get Involved",
        links: [
            "Volunteer",
            "Donate",
            "Collaborate",
            "Sponsor Events",
            "Join Mailing List",
        ],
    },
    {
        title: "Resources",
        links: [
            "Impact Reports",
            "Educational Materials",
            "Press Kit",
            "Research Papers",
            "Success Stories",
        ],
    },
    {
        title: "About",
        links: [
            "Our Story",
            "Team",
            "Mission & Vision",
            "Awards & Recognition",
            "Contact Us",
        ],
    },
];

export const socialLinks: SocialLink[] = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-accent-coral" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-secondary" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-primary" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-destructive" },
];

// -------------------- TEAM --------------------
export interface TeamMember {
    id: number;
    name: string;
    title: string;
    location: string;
    image: string;
    bio: string;
    longBio: string;
    achievements: string[];
    expertise: string[];
    social: {
        instagram: string;
        twitter: string;
        linkedin: string;
        email: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Opemipo Akinwumi",
        title: "Project Lead & Dream Driver",
        location: "Ikeja, Lagos, Nigeria",
        image: Ope,
        bio: "Opemipo drives ReImagine Plastics with a passion for climate action and youth empowerment, turning ideas into projects and making every plastic count as art, not waste.",
        longBio:
            "Opemipo Akinwumi, founder and project lead of ReImagine Plastics, channels her passion for climate action and creative education into transforming communities through art and upcycling. With a background in environmental advocacy, she empowers young people to see plastic waste as opportunity, driving change toward a cleaner, greener future.",
        achievements: ["UN Young Champion Award 2023", "Featured in National Geographic", "TEDx Speaker"],
        expertise: ["Environmental Art", "Youth Education", "Community Organizing"],
        social: {
            instagram: "@sarahchenart",
            twitter: "@sarahchenenviro",
            linkedin: "sarah-chen-reimagine",
            email: "sarah@reimagineplastics.org",
        },
    },
    {
        id: 2,
        name: "Ayodeji Adesegun",
        title: "Tech Brain & Builder",
        location: "Bagada, Lagos, Nigeria",
        image: Ayodeji,
        bio: "Ayodeji, the tech lead at ReImagine Plastics, leverages his passion for AI and programming to build innovative solutions that keep the project scalable and impactful.",
        longBio:
            "Ayodeji Adesegun is the tech brain behind ReImagine Plastics, using AI, machine learning, and software development to build tools that drive growth, efficiency, and digital sustainability. For him, every line of code is a step toward a cleaner world.",
        achievements: ["Youth Leadership Award 2022", "Organized 50+ Community Cleanups", "Mentor to 200+ Youth"],
        expertise: ["Youth Mentoring", "Community Outreach", "Program Development"],
        social: {
            instagram: "@marcusforchange",
            twitter: "@marcuscleanup",
            linkedin: "marcus-johnson-youth",
            email: "marcus@reimagineplastics.org",
        },
    },
    {
        id: 3,
        name: "Oladimeji Victor",
        title: "Code Wizard",
        location: "Satellite town, Lagos, Nigeria",
        image: Victor,
        bio: "Victor is the coder behind ReImagine Plastics, building the web and backend systems that power the project’s vision.",
        longBio: "Victor Oladimeji is the tech mind behind ReImagine Plastics, building web and backend systems that make recycling interactive and accessible. His work empowers young people to become agents of change, while he continues creating ideas that make tech work for the planet.",
        achievements: ["Published 30+ Research Papers", "Ocean Conservation Award 2021", "Scientific Advisor to UN"],
        expertise: ["Marine Biology", "Plastic Pollution Research", "Scientific Communication"],
        social: {
            instagram: "@drpatelocean",
            twitter: "@aishamarinelab",
            linkedin: "www.linkedin.com/in/victor-oladimeji-a5a68428b",
            email: "oladimejivictor611@gmail.com",
        },
    },
    {
        id: 4,
        name: "Pelumi Oyetade",
        title: "Design Eye & Creative Lead",
        location: "Bariga Lagos, Nigeria",
        image: Pelumi,
        bio: "Oluwapelumi is the creative force at ReImagine Plastics, transforming waste into art and inspiring young people to explore sustainable design.",
        longBio: "Oluwapelumi Oyetade, creative lead of ReImagine Plastics, blends art and sustainability to show young people the potential in plastic waste. She designs training materials and art pieces that inspire creativity, change mindsets, and spark action.",
        achievements: ["200+ School Partnerships", "Community Builder Award 2023", "Trilingual Program Leader"],
        expertise: ["Partnership Development", "Cultural Competency", "Nonprofit Management"],
        social: {
            instagram: "@elenapartnerships",
            twitter: "@elenaconnects",
            linkedin: "elena-rodriguez-partnerships",
            email: "elena@reimagineplastics.org",
        },
    },
    {
        id: 5,
        name: "Opeyemi Afuwape",
        title: "Community Connector",
        location: "Bariga Lagos, Nigeria",
        image: Victor,
        bio: "Opeyemi is the heart of ReImagine Plastics, building community partnerships and ensuring the project meets local needs while creating global impact.",
        longBio: "Opeyemi Afuwape, community connector for ReImagine Plastics, builds partnerships with schools, organizations, and leaders to empower youth as changemakers. With her background in community development and education, she ensures the project remains rooted in local needs while driving lasting impact.",
        achievements: ["200+ School Partnerships", "Community Builder Award 2023", "Trilingual Program Leader"],
        expertise: ["Partnership Development", "Cultural Competency", "Nonprofit Management"],
        social: {
            instagram: "@elenapartnerships",
            twitter: "@elenaconnects",
            linkedin: "elena-rodriguez-partnerships",
            email: "elena@reimagineplastics.org",
        },
    },
];

// -------------------- ACTION CARDS --------------------
export interface ActionCard {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    cta: string;
    color: string;
    delay: string;
}

export const actionCards: ActionCard[] = [
    {
        icon: Users,
        title: "Volunteer",
        description: "Join our workshops, lead cleanup events, and mentor youth in your community.",
        features: ["Monthly community cleanups", "Art workshop facilitation", "Youth mentorship programs", "Event organization"],
        cta: "Start Volunteering",
        color: "from-primary to-primary-light",
        delay: "slide-in-left stagger-1",
    },
    {
        icon: Heart,
        title: "Donate",
        description: "Support our mission with funding for materials, workshops, and youth programs.",
        features: ["$25 - Art supplies for 5 youth", "$50 - One workshop session", "$100 - Cleanup event for 20 people", "$250 - Youth leadership training"],
        cta: "Donate Now",
        color: "from-accent-coral to-accent-yellow",
        delay: "slide-in-up stagger-2",
    },
    {
        icon: Share2,
        title: "Follow & Share",
        description: "Amplify our impact by sharing our stories and inspiring others to join the movement.",
        features: ["Follow @reimagineplastics", "Share youth success stories", "Tag friends in our posts", "Use #PlasticToArt hashtag"],
        cta: "Follow Us",
        color: "from-secondary to-accent-purple",
        delay: "slide-in-right stagger-3",
    },
];

// -------------------- EVENTS --------------------
export interface Event {
    date: string;
    title: string;
    location: string;
    time: string;
    spots: string;
}

export const upcomingEvents: Event[] = [
    // { date: "Dec 15", title: "Beach Cleanup & Art Workshop", location: "Santa Monica Beach, CA", time: "9:00 AM - 3:00 PM", spots: "15 spots left" },
    // { date: "Dec 22", title: "Youth Leadership Summit", location: "Online Event", time: "2:00 PM - 5:00 PM", spots: "Open registration" },
    // { date: "Jan 5", title: "New Year, New Art Challenge", location: "Community Centers Nationwide", time: "All day", spots: "100+ locations" },
];

// -------------------- FILTERS --------------------
export interface Filter {
    id: string;
    label: string;
    count: number;
}

export const filters: Filter[] = [
    { id: "all", label: "All Art", count: 0 },
    { id: "bottles", label: "Plastic Bottles", count: 0 },
    { id: "containers", label: "Food Containers", count: 0 },
    { id: "bags", label: "Plastic Bags", count:  0 },
    { id: "mixed", label: "Mixed Materials", count: 0 },
];

// -------------------- ARTWORKS --------------------
export interface Artwork {
    id: number;
    title: string;
    artist: string;
    description: string;
    category: string;
    image: string;
    likes: number;
    materials: string[];
    story: string;
}

export const artworks: Artwork[] = [
    // {
    //     id: 1,
    //     title: "Ocean Waves Sculpture",
    //     artist: "Maya Chen, Age 16",
    //     description: "A flowing sculpture made from 200+ plastic bottles...",
    //     category: "bottles",
    //     image: artGalleryPreview,
    //     likes: 127,
    //     materials: ["Plastic Bottles", "Blue Paint", "Wire Frame"],
    //     story: "Created during our beach cleanup initiative, this piece represents hope for cleaner oceans.",
    // },
    // {
    //     id: 2,
    //     title: "Urban Garden Planters",
    //     artist: "Carlos Rodriguez, Age 15",
    //     description: "Functional planters created from large plastic containers...",
    //     category: "containers",
    //     image: artGalleryPreview,
    //     likes: 89,
    //     materials: ["Food Containers", "Drainage System", "Eco Paint"],
    //     story: "These planters now feed families in our neighborhood with fresh herbs and vegetables.",
    // },
    // {
    //     id: 3,
    //     title: "Butterfly Migration Wall",
    //     artist: "Aisha Patel, Age 17",
    //     description: "A large-scale wall installation made from colorful plastic bags...",
    //     category: "bags",
    //     image: artGalleryPreview,
    //     likes: 203,
    //     materials: ["Plastic Bags", "Metal Framework", "LED Lights"],
    //     story: "Each butterfly represents a piece of plastic saved from the environment.",
    // },
    // {
    //     id: 4,
    //     title: "Community Story Bench",
    //     artist: "Team Project",
    //     description: "A collaborative bench made from mixed plastic waste...",
    //     category: "mixed",
    //     image: artGalleryPreview,
    //     likes: 156,
    //     materials: ["Mixed Plastics", "Concrete Base", "Weather Coating"],
    //     story: "Built by 15 youth over 3 months, now a central meeting place in our community park.",
    // },
    // {
    //     id: 5,
    //     title: "Phoenix Rising Sculpture",
    //     artist: "Jordan Kim, Age 14",
    //     description: "A majestic phoenix sculpture representing rebirth...",
    //     category: "bottles",
    //     image: artGalleryPreview,
    //     likes: 278,
    //     materials: ["Plastic Bottles", "Colored Lighting", "Steel Frame"],
    //     story: "Symbolizes how we can rise from the ashes of environmental destruction.",
    // },
    // {
    //     id: 6,
    //     title: "Rainbow Rain Collection",
    //     artist: "Sofia Martinez, Age 16",
    //     description: "Beautiful hanging art installation that also collects rainwater...",
    //     category: "containers",
    //     image: artGalleryPreview,
    //     likes: 145,
    //     materials: ["Plastic Containers", "Rope System", "Filter Mesh"],
    //     story: "Art that serves the environment - beauty and function combined.",
    // },
];

// -------------------- TRANSFORMATION STEPS --------------------
export interface TransformationStep {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    delay: string;
}

export const transformationSteps: TransformationStep[] = [
    { icon: Users, title: "Youth Empowerment", description: "Training young environmental leaders...", color: "text-primary", delay: "stagger-1" },
    { icon: Recycle, title: "Plastic Collection", description: "Organizing community cleanups...", color: "text-secondary", delay: "stagger-2" },
    { icon: Zap, title: "Creative Transformation", description: "Converting waste into beautiful, meaningful art...", color: "text-accent-coral", delay: "stagger-3" },
    { icon: Heart, title: "Community Impact", description: "Spreading awareness and inspiring change...", color: "text-accent-purple", delay: "stagger-4" },
];
