import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";
import { ModifyOrganisationForm } from "@/components/forms/modify-organisation";
import { _dashboardOrgs } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

const demo = async () => {
  "use server";
}

export default async function OrganisationEdit({ params }: QueryProps) {
  const orgID = params.organisation_id;
  const deleteHandlerData = {
    title: "Delete this organisation",
    description: "All the events and a data associated with this organisation will also be deleted along side the organisation",
    buttonText: "Delete Organisation",
    deleteAction: demo,
    redirectTo: _dashboardOrgs,
    queryKey: []
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Organisation</h2>
      </BodyHeader>
      <BodyContent className="space-y-4">
        <ModifyOrganisationForm orgID={orgID} />
        <DeleteHandler { ...deleteHandlerData } />
      </BodyContent>
    </>
  );
}