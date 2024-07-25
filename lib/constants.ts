
export const FAQS = [
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

export const EVENT_CATEGORIES = [
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

export const ORGANISATION_CATEGORIES = [
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

export const SCHOOLS = [
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