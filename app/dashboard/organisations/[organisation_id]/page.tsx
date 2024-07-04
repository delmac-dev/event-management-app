import { organisations, OrgType } from "@/lib/constants";
import { _dashboardOrgEvents, _dashboardOrgMembers, _dashboardOrgRoles } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import { findItem } from "@/lib/utils";
import Image from "next/image";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const organisationID = params.organisation_id;
  const data = findItem(organisationID, organisations) as OrgType;

  return (
    <>
      <section className="overflow-hidden section_body my-1 bg-secondary h-72 rounded-lg p-0">
        <img src={data?.images[0]} className="w-full h-full object-cover" />
      </section>
    </>
  );
}