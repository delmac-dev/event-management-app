'use client'

import { OAuthProvider } from "@/lib/types";
import { Button } from "../ui/button";
import GoogleIcon from "../icons/google-icon";
import GithubIcon from "../icons/github-icon";
import { signInWithOAuth } from "@/lib/actions";
import { useQueryClient } from "@tanstack/react-query";
import { Provider } from "@supabase/supabase-js";


export default function OAuthProviders() {
    const queryClient = useQueryClient();

    const providers:OAuthProvider[] = [
        {
            name: "github",
            icon: GithubIcon
        },
        {
            name: "google",
            icon: GoogleIcon
        },
    ];

    const handleaOAuthSignIn = async (provider: Provider) => {
        queryClient.invalidateQueries();
        await signInWithOAuth(provider);
    }

    return (
        <>
            {providers.map((provider, _i) => (
                <Button 
                    key={_i} 
                    variant={'outline'} 
                    className="gap-3 capitalize"
                    type="submit" 
                    formAction={async ()=> await handleaOAuthSignIn(provider.name)}
                >
                    {provider.icon? <provider.icon /> : ''}
                    Continue With {provider.name}
                </Button>
            ))}
        </>
    )
}