import BodyHeader from "@/app/dashboard/(components)/body-header";
import BodyContent from "@/app/dashboard/(components)/body-content";
import HandleProfileForm from "@/components/forms/handle-profile";

export const dynamic = 'force-dynamic';

export default async function ProfileEdit() {

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Profile</h2>
      </BodyHeader>
      <BodyContent className="space-y-4">
        <HandleProfileForm />
      </BodyContent>
    </>
  );
}