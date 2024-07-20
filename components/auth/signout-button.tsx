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
        className="w-full mt-2" 
        formAction={handleSignOut}
      >
        SignOut
      </Button>
    </form>
  )
}
