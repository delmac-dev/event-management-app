import { _dashboardEventTickets } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const eventID = params.event_id;
  
  redirect(_dashboardEventTickets(eventID));
}