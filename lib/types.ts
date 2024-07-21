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
    updated_at: string
}