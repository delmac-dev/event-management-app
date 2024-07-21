import { _dashboardOrg } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import NewOrganisationHandler from "../(form-handlers)/new-organisation-handler";
import BodyHeader from "../(components)/body-header";
import OrganisationsContainer from "../(components)/organisations-container";

export default async function DashboardOrganisations({ searchParams }: QueryProps) {
  const isOrgFormOpen = searchParams.new as unknown as boolean;

  return (
    <>
      <BodyHeader>
          <h2 className="text-xl font-medium">Organisations</h2>
          <NewOrganisationHandler isOpen={isOrgFormOpen} />
      </BodyHeader>
      <OrganisationsContainer />
    </>
  );
}