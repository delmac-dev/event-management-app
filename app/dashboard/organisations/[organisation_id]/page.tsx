import { _dashboardOrgEvents, _dashboardOrgMembers, _dashboardOrgRoles } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      {organisationID} home page
    </>
  );
}