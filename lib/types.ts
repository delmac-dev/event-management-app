import { Provider, SupabaseClient } from "@supabase/supabase-js"
import { Database } from "./supabase/database.type"

export type QueryProps = {
    params: {[key: string]: string}
    searchParams: { [key: string]: string }
}

export type TypedSupabaseClient = SupabaseClient<Database>;

export type OAuthProvider = {
    name: Provider,
    icon?: React.ElementType
}

export type NavigationProps = {
    name: string;
    link: string;
    active: boolean;
};

export type FetchedOrganisationProps = {
    about: string | null,
    avatar_url: string,
    category: string,
    created_at: string,
    headline: string
    id: string
    is_verified: boolean
    name: string
    profiles: {
        id: string,
        full_name: string
    },
    updated_at: string,
    organisation_members: string[]
}

export type FetchedEventProps = {
    id: string,
    capacity: number,
    category: string,
    end_at: string,
    event_date: string,
    event_status: string,
    event_type: 'public'| "private",
    headline: string,
    is_published: boolean,
    name: string,
    organisation_id: string
    organiser: string,
    start_at: string,
    about: string | null,
    tags: string[],
    banner: string,
    created_at: string,
    updated_at: string
    agenda: { time: string, title: string, description: string } [] | null,
    faq: { question: string, answer: string }[] | null,
    location: { name: string, school: string, description: string } | null,
}

export type FetchedModifiableEventProps = {
    id: string,
    name: string,
    about: string | null,
    banner: string,
    capacity: number,
    category: string,
    created_at: string,
    end_at: string,
    event_date: string,
    event_status: string,
    event_type: 'public'| "private",
    start_at: string,
    tags: string[]
    updated_at: string,
    headline: string,
    is_published: boolean,
    location: {name: string, school: string, description: string}
    agenda: { time: string, title: string, description: string } [] | null,
    faq: { question: string, answer: string }[] | null,
    organisation_id: {value: string, label: string}
    organiser: {value: string, label: string}
}

export type FetchedMembersProps = {
    organisation_id: string,
    has_accepted: boolean,
    id: string,
    is_active: boolean,
    profiles: { id: string, email: string, full_name: string, avatar_url: string }
}

export type FetchedModifiableMemberProps = {
    is_active: boolean;
    user: {
        value: string;
        label: string;
    } 
};

export type FetchedAttendeeProps = {
    id: string,
    user_id: string | null
    email: string,
    event_id: string,
    full_name: string
    has_account: boolean,
    hold_expire_in: string,
    payment_status: string,
    status: string,
    ticket_code: string,
    ticket_id: string,
    updated_at: string,
    created_at: string
}

export type FetchedTicketsProps = {
    availability: string,
    available_tickets: number;
    event_id: string,
    id: string,
    is_active: boolean,
    name: string,
    price: string,
    ticket_code_prefix: string,
    ticket_type: string,
    total_tickets: number,
    updated_at: string,
    created_at: string,
    wait_on: string | null;
}

export type FetchedPublicEventsProps = {
    id: string,
    about: string,
    name: string,
    headline: string,
    banner: string,
    event_date: string,
    end_at: string,
    start_at: string,
    location: { name: string, school: string, description: string },
    tags: string[]
    profiles: { avatar_url: string, full_name: string, id: string }
}

export type AttachedPublicTicketsProps = {

}

export type FetchedPublicEventProps = {
    id: string,
    about: string,
    banner: string,
    headline: string,
    capacity: number,
    category: string,
    created_at: string,
    end_at: string,
    event_date: string,
    event_status: string,
    event_type: string,
    is_published: boolean,
    name: string,
    organisation_id: string,
    organiser: string,
    tags: string[],
    tickets: AttachedPublicTicketsProps[],
    start_at: string,
    updated_at: string
    location: { name: string, school: string, description: string } | null,
    agenda: { time: string, title: string, description: string } [] | null,
    faq: { question: string, answer: string }[] | null,
}

export type FetchedBookableTicketProps = {
    id: string,
    name: string,
    total_tickets: number,
    available_tickets: number,
    ticket_type: string,
    price: string,
}

export type FetchedMyTickets = {
    created_at: string
    email: string
    event_id: string,
    full_name: string,
    has_account: boolean,
    hold_expire_in: string | null,
    id: string,
    payment_status: string,
    status: string,
    ticket_code: string,
    ticket_id: string,
    updated_at: string,
    user_id: string,
}

export type SearchedTicketsProps = {
    id: string,
    ticket_id: string,
    full_name: string,
    email: string,
    ticket_code: string
}

export type FetchedPublicAttendeesProps = {
    id: string;
    full_name: string;
    email: string;
    ticket_code: string;
    event_id: string;
    user_id: string;
    tickets: {
        id: string;
        ticket_type: string;
        name: string;
        events: {
            id: string;
            name: string;
            headline: string;
            banner: string;
            event_date: string;
            start_at: string;
        };
    };
}