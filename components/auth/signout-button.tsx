import { _login } from "@/lib/routes";
import { Button } from "../ui/button";
import { signOut } from "@/lib/actions";

export default function SignOutButton({extraAction}: { extraAction: ()=>void}) {

  const handleSignOut = async () => {
    extraAction();
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
