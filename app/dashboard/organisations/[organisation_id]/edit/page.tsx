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

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Organisation</h2>
      </BodyHeader>
      <BodyContent className="space-y-4">
        <ModifyOrganisationForm orgID={orgID} />
      </BodyContent>
    </>
  );
}