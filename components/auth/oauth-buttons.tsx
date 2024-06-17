import { OAuthProvider } from "@/lib/types";
import { Button } from "../ui/button";
import GoogleIcon from "../icons/google-icon";
import GithubIcon from "../icons/github-icon";


export default async function OAuthProviders() {
    const providers:OAuthProvider[] = [
        {
            provider: 'github',
            name: "Github",
            icon: GithubIcon
        },
        {
            provider: 'google',
            name: "Google",
            icon: GoogleIcon
        },
    ]

    return (
        <>
            {providers.map((provider, _i) => (
                <Button key={_i} variant={'outline'} className="gap-3">
                    {provider.icon? <provider.icon /> : ''}
                    Sign In With {provider.name}
                </Button>
            ))}
        </>
    )
}