import { Provider, SupabaseClient } from "@supabase/supabase-js"
import { Database } from "./supabase/database.type"

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
    about: string,
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