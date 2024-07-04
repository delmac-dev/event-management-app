export type OrgType = {
    id: string;
    owner: string;
    name: string;
    headline: string;
    about: string;
    images: string[];
    social_links: string[];
    contact: string;
    category: string[];
    is_verified: boolean;
}

export const organisations: OrgType[]= [
    {
        id: "187654321098765",
        owner: "123456789012345",
        name: "Engineering Students Society",
        headline: "Innovate, Create, Engineer",
        about: "The Engineering Students Society fosters innovation and practical skills among engineering students.",
        images: ["/dddepth-150.jpg"],
        social_links: ["https://github.com/ess"],
        contact: "04563857830",
        category: ["academic"],
        is_verified: true
    },
    {
        id: "298765432109876",
        owner: "234567890123456",
        name: "Drama Club",
        headline: "Acting is our passion",
        about: "Join the Drama Club to explore your acting talents and participate in various plays and performances.",
        images: ["/dddepth-164.jpg"],
        social_links: ["https://github.com/drama-club"],
        contact: "04563857831",
        category: ["cultural"],
        is_verified: true
    },
    {
        id: "309876543210987",
        owner: "345678901234567",
        name: "Computer Science Society",
        headline: "Code the future",
        about: "A community for computer science enthusiasts to learn, share, and collaborate on projects.",
        images: ["/dddepth-171.jpg"],
        social_links: ["https://github.com/css"],
        contact: "04563857832",
        category: ["academic"],
        is_verified: false
    },
    {
        id: "420987654321098",
        owner: "456789012345678",
        name: "Music Lovers Club",
        headline: "Feel the rhythm",
        about: "A place for students who love music to come together, share their favorite tracks, and even create their own.",
        images: ["/dddepth-202.jpg"],
        social_links: ["https://github.com/music-lovers"],
        contact: "04563857833",
        category: ["cultural"],
        is_verified: true
    },
    {
        id: "531098765432109",
        owner: "567890123456789",
        name: "Environmental Awareness Group",
        headline: "Go green, stay clean",
        about: "Promoting environmental awareness and sustainable practices within the campus community.",
        images: ["/dddepth-236.jpg"],
        social_links: ["https://github.com/environment-group"],
        contact: "04563857834",
        category: ["social"],
        is_verified: true
    },
    {
        id: "642109876543210",
        owner: "678901234567890",
        name: "Literature Club",
        headline: "Words that inspire",
        about: "For those who love reading and writing, the Literature Club offers a space to discuss and share literary works.",
        images: ["/dddepth-242.jpg"],
        social_links: ["https://github.com/lit-club"],
        contact: "04563857835",
        category: ["cultural"],
        is_verified: false
    },
    {
        id: "753210987654321",
        owner: "789012345678901",
        name: "Sports Club",
        headline: "Play hard, play fair",
        about: "Join the Sports Club to participate in various sports activities and tournaments throughout the year.",
        images: ["/dddepth-312.jpg"],
        social_links: ["https://github.com/sports-club"],
        contact: "04563857836",
        category: ["recreational"],
        is_verified: true
    },
    {
        id: "864321098765432",
        owner: "890123456789012",
        name: "Photography Club",
        headline: "Capture the moment",
        about: "A club for photography enthusiasts to learn, practice, and showcase their skills.",
        images: ["/dddepth-318.jpg"],
        social_links: ["https://github.com/photo-club"],
        contact: "04563857837",
        category: ["recreational"],
        is_verified: false
    },
    {
        id: "975432109876543",
        owner: "901234567890123",
        name: "Chess Club",
        headline: "Strategize and win",
        about: "For chess lovers of all skill levels to come together, play, and improve their game.",
        images: ["/dddepth-320.jpg"],
        social_links: ["https://github.com/chess-club"],
        contact: "04563857838",
        category: ["recreational"],
        is_verified: true
    },
    {
        id: "086543210987654",
        owner: "012345678901234",
        name: "Debate Society",
        headline: "Voice your opinion",
        about: "Join the Debate Society to engage in meaningful discussions and improve your public speaking skills.",
        images: ["/dddepth-344.jpg"],
        social_links: ["https://github.com/debate-society"],
        contact: "04563857839",
        category: ["academic"],
        is_verified: false
    },
    {
        id: "197654321098765",
        owner: "123456789012345",
        name: "Volunteer Group",
        headline: "Serve the community",
        about: "A group dedicated to organizing and participating in volunteer activities to help the local community.",
        images: ["/dddepth-3442.jpg"],
        social_links: ["https://github.com/volunteer-group"],
        contact: "04563857840",
        category: ["social"],
        is_verified: true
    },
    {
        id: "208765432109876",
        owner: "234567890123456",
        name: "Robotics Club",
        headline: "Build and innovate",
        about: "A community for students interested in robotics to learn, build, and compete in robotics competitions.",
        images: ["/dddepth-150.jpg"],
        social_links: ["https://github.com/robotics-club"],
        contact: "04563857841",
        category: ["academic"],
        is_verified: true
    },
    {
        id: "319876543210987",
        owner: "345678901234567",
        name: "Art Club",
        headline: "Express your creativity",
        about: "For those who love to create art, the Art Club provides a space to draw, paint, and share artwork.",
        images: ["/dddepth-164.jpg"],
        social_links: ["https://github.com/art-club"],
        contact: "04563857842",
        category: ["cultural"],
        is_verified: false
    },
    {
        id: "420987654321098",
        owner: "456789012345678",
        name: "Tech Innovators",
        headline: "Innovate the future",
        about: "A club for tech enthusiasts to discuss the latest trends, work on projects, and innovate new solutions.",
        images: ["/dddepth-171.jpg"],
        social_links: ["https://github.com/tech-innovators"],
        contact: "04563857843",
        category: ["academic"],
        is_verified: true
    }
];