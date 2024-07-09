import { Provider, SupabaseClient } from "@supabase/supabase-js"

export type QueryProps = {
    params: {[key: string]: string}
    searchParams: { [key: string]: string }
}

// export TypedSupabaseClient = SuperbaseClient<>

export type OAuthProvider = {
    name: Provider,
    icon?: React.ElementType
}

export type NavigationProps = {
    name: string;
    link: string;
    active: boolean;
}