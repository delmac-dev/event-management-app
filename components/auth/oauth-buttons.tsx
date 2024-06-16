import { OAuthProvider } from "@/lib/types";
import { Button } from "../ui/button";


export default async function OAuthProviders() {
    const providers:OAuthProvider[] = [
        {
            provider: 'github',
            name: "Github"
        },
        {
            provider: 'google',
            name: "Google"
        },
    ]

    return (
        <>
            {providers.map(({provider, name}, _i) => (
                <Button key={_i} variant={'outline'} >Sign In With {name}</Button>
            ))}
        </>
    )
}