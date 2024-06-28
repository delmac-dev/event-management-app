"use client";

import { OAuthProvider } from "@/lib/types";
import { Button } from "../ui/button";
import GoogleIcon from "../icons/google-icon";
import GithubIcon from "../icons/github-icon";
import { SignInWithOauth } from "@/lib/actions";


export default async function OAuthProviders() {
    const providers:OAuthProvider[] = [
        {
            name: "github",
            icon: GithubIcon
        },
        {
            name: "google",
            icon: GoogleIcon
        },
    ]

    return (
        <>
            {providers.map((provider, _i) => (
                <Button 
                    key={_i} 
                    variant={'outline'} 
                    className="gap-3 capitalize" 
                    onClick={async ()=> await SignInWithOauth(provider.name)}
                >
                    {provider.icon? <provider.icon /> : ''}
                    Sign In With {provider.name}
                </Button>
            ))}
        </>
    )
}