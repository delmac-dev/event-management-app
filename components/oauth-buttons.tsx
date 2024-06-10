import { OAuthProvider } from "@/lib/types";


export default async function OAuthProviders() {
    const providers:OAuthProvider[] = [
        {
            provider: 'github',
            name: "Github"
        }
    ]

    return (
        <>
            {providers.map((provider, _i) => {
                <>provider</>
            })}
        </>
    )
}