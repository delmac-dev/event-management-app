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
    }
];

export const events: EventType[] = [
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

export const MAX_FILE_SIZE = 5000000;

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const EVENT_TYPE_OPTIONS = ["public", "private"];

export const TIME_REGEX = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

export const AVAILABILITY_OPTIONS = ["available", "unavailable"];

export const TICKET_TYPE_OPTIONS = ["free", "priced"];

export const ATTENDEE_STATUS_OPTIONS = ['registered', 'checked-in', 'cancelled', 'no-show'];

export const PAYMENT_STATUS_OPTIONS = ['pending', 'completed', 'failed'];