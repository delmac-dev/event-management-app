"use client";

import { _login } from "@/lib/routes";
import { Button } from "../ui/button";
import { signOut } from "@/lib/actions";
import { useQueryClient } from "@tanstack/react-query";

export default function SignOutButton({extraAction}: { extraAction: ()=>void}) {
  const queryClient = useQueryClient();

  const handleSignOut = async () => {
    extraAction();
    queryClient.invalidateQueries();
    await signOut();
  }

  return (
    <form>
      <Button 
        type="submit"  
        variant='secondary'
        className="w-full rounded-none justify-start bg-background px-2.5" 
        formAction={handleSignOut}
      >
        SignOut
      </Button>
    </form>
  )
}
