import BodyHeader from "@/app/dashboard/(components)/body-header";
import BodyContent from "@/app/dashboard/(components)/body-content";
import { _home } from "@/lib/routes";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";
import HandleProfileForm from "@/components/forms/handle-profile";

const demo = async () => {
  "use server";
}

export default async function ProfileEdit() {
  const deleteHandlerData = {
    title: "Delete my profile",
    description: "All the events and a data associated with this organisation will also be deleted along side the organisation",
    buttonText: "Delete Profile",
    deleteAction: demo,
    redirectTo: _home,
    queryKey: []
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Profile</h2>
      </BodyHeader>
      <BodyContent className="space-y-4">
        <HandleProfileForm />
        <DeleteHandler { ...deleteHandlerData } />
      </BodyContent>
    </>
  );
}