import { Provider, SupabaseClient } from "@supabase/supabase-js"

export type QueryProps = {
    params: {[key: string]: string}
    searchParams: { [key: string]: string }
}

export type TypedSupabaseClient = {}

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
    owner: {
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
    location: { name: string, school: string, description: string }[] | null,
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

export type fetchedMembersProps = {
    has_accepted: boolean,
    id: string,
    is_active: boolean,
    profiles: { email: string, full_name: string, avatar_url: string }
}