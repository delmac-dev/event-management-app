import { _dashboardOrgEvents } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  redirect(_dashboardOrgEvents(organisationID));
}