import { User } from "@supabase/supabase-js";

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

export type TicketType = {
    id: string;
    user_id: string;
    tickets_id: string;
    has_account: boolean;
    full_name: string;
    email: string;
    ticket_code: string;
    hold_expire_in: string;
    status: string;
    payment_status: string;
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

export const tickets:TicketType[] = [
    {
      id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3g4h5i6j",
      user_id: "123e4567-e89b-12d3-a456-426614174000",
      tickets_id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3g4h5i6j",
      has_account: true,
      full_name: "John Doe",
      email: "john.doe@example.com",
      ticket_code: "TCKT123456",
      hold_expire_in: "2024-07-10T12:00:00Z",
      status: "registered",
      payment_status: "completed",
      updated_at: "2024-07-04T08:00:00Z",
      created_at: "2024-07-04T08:00:00Z"
    },
    {
      id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3g4h5i6j7k",
      user_id: "123e4567-e89b-12d3-a456-426614174000",
      tickets_id: "b2c3d4e5-f6a7-8b9c-0d1e-2f3g4h5i6j7k",
      has_account: false,
      full_name: "Jane Smith",
      email: "jane.smith@example.com",
      ticket_code: "TCKT654321",
      hold_expire_in: "2024-07-11T12:00:00Z",
      status: "checked-in",
      payment_status: "completed",
      updated_at: "2024-07-04T08:00:00Z",
      created_at: "2024-07-04T08:00:00Z"
    },
    {
      id: "3c4d5e6f-7a8b-9c0d-1e2f-3g4h5i6j7k8l",
      user_id: "123e4567-e89b-12d3-a456-426614174000",
      tickets_id: "c3d4e5f6-a7b8-9c0d-1e2f-3g4h5i6j7k8l",
      has_account: true,
      full_name: "Alice Johnson",
      email: "alice.johnson@example.com",
      ticket_code: "TCKT789012",
      hold_expire_in: "2024-07-12T12:00:00Z",
      status: "cancelled",
      payment_status: "failed",
      updated_at: "2024-07-04T08:00:00Z",
      created_at: "2024-07-04T08:00:00Z"
    },
    {
      id: "4d5e6f7a-8b9c-0d1e-2f3g-4h5i6j7k8l9m",
      user_id: "123e4567-e89b-12d3-a456-426614174000",
      tickets_id: "d4e5f6a7-b8c9-0d1e-2f3g-4h5i6j7k8l9m",
      has_account: false,
      full_name: "Bob Brown",
      email: "bob.brown@example.com",
      ticket_code: "TCKT345678",
      hold_expire_in: "2024-07-13T12:00:00Z",
      status: "no-show",
      payment_status: "pending",
      updated_at: "2024-07-04T08:00:00Z",
      created_at: "2024-07-04T08:00:00Z"
    },
    {
      id: "5e6f7a8b-9c0d-1e2f-3g4h-5i6j7k8l9m0n",
      user_id: "123e4567-e89b-12d3-a456-426614174000",
      tickets_id: "e5f6a7b8-c9d0-1e2f-3g4h-5i6j7k8l9m0n",
      has_account: true,
      full_name: "Charlie Davis",
      email: "charlie.davis@example.com",
      ticket_code: "TCKT901234",
      hold_expire_in: "2024-07-14T12:00:00Z",
      status: "registered",
      payment_status: "pending",
      updated_at: "2024-07-04T08:00:00Z",
      created_at: "2024-07-04T08:00:00Z"
    }
];

export const offlineUser: User = { 
    "id": "0c7d5938-1ea2-4523-9520-fd969590b1c9", 
    "aud": "authenticated", 
    "role": "authenticated", 
    "email": "delalitengue.dev@gmail.com", 
    "email_confirmed_at": "2024-06-30T21:31:22.525419Z", 
    "phone": "", 
    "confirmed_at": "2024-06-30T21:31:22.525419Z", 
    "last_sign_in_at": "2024-07-05T12:11:27.199207Z", 
    "app_metadata": { "provider": "github", "providers": ["github"] }, 
    "user_metadata": { 
        "avatar_url": "https://avatars.githubusercontent.com/u/136045782?v=4", 
        "email": "delalitengue.dev@gmail.com", 
        "email_verified": true, 
        "full_name": "Delali Tengue", 
        "iss": "https://api.github.com", 
        "name": "Delali Tengue", 
        "phone_verified": false, 
        "preferred_username": "delmac-dev", 
        "provider_id": "136045782", 
        "sub": "136045782", 
        "user_name": "delmac-dev" 
    }, 
    "identities": [
        { 
            "identity_id": "d51eb44a-3efb-443c-bf22-db3132af43fd", 
            "id": "136045782", 
            "user_id": "0c7d5938-1ea2-4523-9520-fd969590b1c9", 
            "identity_data": { 
                "avatar_url": "https://avatars.githubusercontent.com/u/136045782?v=4", 
                "email": "delalitengue.dev@gmail.com", 
                "email_verified": true, 
                "full_name": "Delali Tengue", 
                "iss": "https://api.github.com", 
                "name": "Delali Tengue", 
                "phone_verified": false, 
                "preferred_username": "delmac-dev", 
                "provider_id": "136045782", 
                "sub": "136045782", 
                "user_name": "delmac-dev" 
            }, 
            "provider": "github", 
            "last_sign_in_at": "2024-06-30T21:31:22.520695Z", 
            "created_at": "2024-06-30T21:31:22.520745Z", 
            "updated_at": "2024-07-05T12:11:08.685497Z",
        }
    ], 
    "created_at": "2024-06-30T21:31:22.51676Z", 
    "updated_at": "2024-07-05T12:11:27.221304Z", 
    "is_anonymous": false 
}

export const faqs = [
    {
        "question": "How do I create a new event on CampusEvents?",
        "answer": "To create a new event, log in to your account, click on the 'Create Event' button, fill in the event details, and submit. Your event will then be listed on the platform."
    },
    {
        "question": "Can I promote my event through CampusEvents?",
        "answer": "Yes, you can promote your event by using our integrated promotion tools, which include social media sharing, email invitations, and featured listings."
    },
    {
        "question": "How can I cancel an event I created?",
        "answer": "To cancel an event, go to your event dashboard, select the event you want to cancel, and click the 'Cancel Event' button. You will need to confirm the cancellation."
    },
    {
        "question": "How do I update my event details after it's been published?",
        "answer": "To update event details, go to your event dashboard, select the event you want to edit, and make the necessary changes. Remember to save your updates."
    },
    {
        "question": "Is my personal information secure on CampusEvents?",
        "answer": "Yes, CampusEvents takes your privacy and security seriously. We use industry-standard encryption and security measures to protect your personal information."
    }
]

export const eventCategories = [
    "seminar", "workshop", "conference", "cultural event", "wellness program", 
    "concert", "exibition", "film screening", "comedy show", "tournament", 
    "fitness class", "games", "recreational", "career fair", "charity", "orientation", 
    'campus tour', "open house", "fundraiser",
] as const;

export const eventCategoryList = [
    {label: "Seminar", value:"seminar"},
    {label: "Workshop", value:"workshop"},
    {label: "Conference", value:"conference"},
    {label: "Cultural Event", value:"cultural event"},
    {label: "Wellness Program", value:"wellness program"},
    {label: "Concert", value:"concert"},
    {label: "Exibition", value:"exibition"},
    {label: "Film Screening", value:"film screening"},
    {label: "Comedy Show", value:"comedy show"},
    {label: "Tournament", value:"tournament"},
    {label: "Fitness Class", value:"fitness class"},
    {label: "Games", value:"games"},
    {label: "Recreational", value:"recreational"},
    {label: "Career Fair", value:"career fair"},
    {label: "Charity", value:"charity"},
    {label: "Orientation", value:"orientation"},
    {label: "Campus Tour", value:'campus tour'},
    {label: "Open House", value:"open house"},
    {label: "Fundraiser", value:"fundraiser"},
]

export const orgCategories = [
    {label: "Personal", value: "personal"},
    {label: "Other", value: "other"},
    {label: "Cultural", value: "cultural"},
    {label: "Academic", value: "academic"},
    {label: "Faith and Spiritual", value: "faith and spiritual"},
    {label: "Hobbies and Interests", value: "hobbies and interests"},
    {label: "Volunteer and Charity", value: "volunteer and charity"},
    {label: "Social and Political", value: "social and political"},
    {label: "Technology and Innovation", value: "technology and innovation"},
    {label: "Arts and Performance", value: "arts and performance"},
];

export const schools = [
    {
        label: "Kwame Nkrumah University of Science and Technology", 
        value: "Kwame Nkrumah University of Science and Technology"
    },
]

const member_role_json = {
    "can_modify_organisation": true,
    "can_add_new_member": true,
    "can_modify_member": true,
    "can_remove_member": true,
    "can_add_new_role": true,
    "can_modify_role": true,
    "can_remove_role": true,
    "can_add_new_event": true
}


export const MAX_FILE_SIZE = 5000000;

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const EVENT_TYPE_OPTIONS = ["public", "private"];

export const TIME_REGEX = /^(0[1-9]|1[0-2]):([0-5][0-9]) ?([AaPp][Mm])$/;