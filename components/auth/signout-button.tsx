import { _login } from "@/lib/routes";
import { Button } from "../ui/button";
import { signOut } from "@/lib/actions";

export default function SignOutButton() {
  return (
    <form>
      <Button 
        type="submit"  
        className="mt-4 w-full" 
        formAction={async()=> await signOut()}
      >
        SignOut
      </Button>
    </form>
  )
}
