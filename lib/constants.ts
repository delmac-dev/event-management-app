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

export type EventType = {
    id: string;
    organisation_id: string;
    organiser: string;
    name: string;
    headline: string;
    about: string;
    images: string[];
    start_at: string;
    end_at: string;
    location: {
        address: string;
        city: string;
        country: string;
    };
    faq: {[key: string] : string}[];
    agenda: {[key: string] : string}[];
    is_published: boolean;
    has_started: boolean;
    category: string[];
    capacity: number;
    event_type: string;
    updated_at: string;
    created_at: string;
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

export const events: EventType[] = [
    {
        id: "e1f8a8de-78c1-4c1f-9b1a-7a3d9cbd0e4d",
        organisation_id: "187654321098765",
        organiser: "123456789012345",
        name: "Tech Conference 2024",
        headline: "Exploring Future Technologies",
        about: "A conference dedicated to exploring and discussing the future of technology.",
        images: ["/dddepth-150.jpg"],
        start_at: "09:00:00",
        end_at: "17:00:00",
        location: { address: "Tech Hall, KNUST", city: "Kumasi", country: "Ghana" },
        faq: [{ "What is the dress code?": "Business casual"}, {"Is registration required?": "Yes" }],
        agenda: [{ "09:00": "Registration"}, {"10:00": "Keynote Speaker"}, {"12:00": "Lunch Break"}, {"14:00": "Panel Discussion" }],
        is_published: true,
        has_started: false,
        category: ["technology", "conference"],
        capacity: 300,
        event_type: "conference",
        updated_at: "2024-07-04T08:00:00Z",
        created_at: "2024-07-04T08:00:00Z"
    },
    {
        id: "e2b9c1ed-89d2-4d2f-a6c3-5b9a4cd8d2f6",
        organisation_id: "298765432109876",
        organiser: "234567890123456",
        name: "Drama Festival 2024",
        headline: "Celebrating Theatrical Arts",
        about: "An annual festival showcasing various theatrical performances by students.",
        images: ["/dddepth-164.jpg"],
        start_at: "14:00:00",
        end_at: "20:00:00",
        location: { address: "Main Auditorium, KNUST", city: "Kumasi", country: "Ghana" },
        faq: [{ "Are tickets free?": "Yes"}, {"Can I participate?": "Contact the organizer" }],
        agenda: [{ "14:00": "Opening Ceremony"}, {"15:00": "First Performance"}, {"17:00": "Intermission"}, {"18:00": "Second Performance" }],
        is_published: true,
        has_started: false,
        category: ["theater", "festival"],
        capacity: 500,
        event_type: "festival",
        updated_at: "2024-07-04T08:00:00Z",
        created_at: "2024-07-04T08:00:00Z"
    },
    {
        id: "e3c8d2fe-9ad3-4e3f-b7d4-6c9b5dc8e3f7",
        organisation_id: "309876543210987",
        organiser: "345678901234567",
        name: "Coding Bootcamp",
        headline: "Learn to Code in 3 Days",
        about: "An intensive bootcamp designed to teach beginners the fundamentals of programming.",
        images: ["/dddepth-171.jpg"],
        start_at: "08:00:00",
        end_at: "16:00:00",
        location: { address: "Computer Lab, KNUST", city: "Kumasi", country: "Ghana" },
        faq: [{ "Do I need prior experience?": "No"}, {"What should I bring?": "Laptop and charger" }],
        agenda: [{ "08:00": "Introduction"}, {"09:00": "First Session"}, {"12:00": "Lunch Break"}, {"13:00": "Second Session" }],
        is_published: true,
        has_started: false,
        category: ["education", "workshop"],
        capacity: 100,
        event_type: "workshop",
        updated_at: "2024-07-04T08:00:00Z",
        created_at: "2024-07-04T08:00:00Z"
    },
    {
        id: "e4d9e3ff-0be4-4f4f-c8e5-7d1b6ed9f4f8",
        organisation_id: "420987654321098",
        organiser: "456789012345678",
        name: "Music Concert",
        headline: "Live Performances by Top Bands",
        about: "A night of live music performances by some of the best bands in the region.",
        images: ["/dddepth-202.jpg"],
        start_at: "18:00:00",
        end_at: "23:00:00",
        location: { address: "Outdoor Stage, KNUST", city: "Kumasi", country: "Ghana" },
        faq: [{ "Is there an age limit?": "No"}, {"Can I bring food?": "Yes" }],
        agenda: [{ "18:00": "Opening Act"}, {"19:00": "First Band"}, {"21:00": "Intermission"}, {"21:30": "Second Band" }],
        is_published: true,
        has_started: false,
        category: ["music", "concert"],
        capacity: 1000,
        event_type: "concert",
        updated_at: "2024-07-04T08:00:00Z",
        created_at: "2024-07-04T08:00:00Z"
    },
    {
        id: "e5eaf510-1cf5-4f5f-d9f6-8e2c7f1f5f9a",
        organisation_id: "531098765432109",
        organiser: "567890123456789",
        name: "Environmental Workshop",
        headline: "Sustainable Living Practices",
        about: "A workshop on sustainable living practices and how to implement them in daily life.",
        images: ["/dddepth-236.jpg"],
        start_at: "10:00:00",
        end_at: "15:00:00",
        location: { address: "Green Hall, KNUST", city: "Kumasi", country: "Ghana" },
        faq: [{ "Is there a fee?": "No", "What should I bring?": "Notebook and pen" }],
        agenda: [{ "10:00": "Welcome"}, {"11:00": "First Session"}, {"13:00": "Lunch Break"}, {"14:00": "Second Session" }],
        is_published: true,
        has_started: false,
        category: ["environment", "workshop"],
        capacity: 150,
        event_type: "workshop",
        updated_at: "2024-07-04T08:00:00Z",
        created_at: "2024-07-04T08:00:00Z"
    }
];