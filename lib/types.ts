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

export type ProfileProps = Database['public']['Tables']['profiles']['Row'];

export type EventProps = Database['public']['Tables']['events']['Row'];

export type OrgProps = Database['public']['Tables']['organisations']['Row'];

export type OrgMemberProps = Database['public']['Tables']['organisation_members']['Row'];

export type AttendeeProps = Database['public']['Tables']['attendees']['Row'];

export type TicketProps = Database['public']['Tables']['tickets']['Row'];

export type NotificationProps = Database['public']['Tables']['notifications']['Row'];

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