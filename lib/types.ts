import { Provider } from "@supabase/supabase-js"

export type QueryProps = {
    params: {[key: string]: string}
    searchParams: { [key: string]: string }
}

export type OAuthProvider = {
    provider: Provider,
    name: string,
    icon?: React.ReactElement
}