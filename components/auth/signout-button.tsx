import { _login } from "@/lib/routes";
import { Button } from "../ui/button";
import { signOut } from "@/lib/actions";

export default function SignOutButton() {
  return (
    <form>
      <Button 
        type="submit"  
        variant='secondary'
        className="w-full mt-2" 
        formAction={async()=> await signOut()}
      >
        SignOut
      </Button>
    </form>
  )
}
