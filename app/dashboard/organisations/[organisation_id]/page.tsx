import { _dashboardOrgEvents, _dashboardOrgMembers, _dashboardOrgRoles } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      <section className="section_body my-1 bg-secondary h-60 rounded-lg">

      </section>
    </>
  );
}