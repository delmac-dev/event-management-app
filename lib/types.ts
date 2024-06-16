import { Provider, SupabaseClient } from "@supabase/supabase-js"

export type QueryProps = {
    params: {[key: string]: string}
    searchParams: { [key: string]: string }
}

// export TypedSupabaseClient = SuperbaseClient<>

export type OAuthProvider = {
    provider: Provider,
    name: string,
    icon?: React.ReactElement
}