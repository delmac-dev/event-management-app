import { QueryProps } from "@/lib/types";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <>
      {eventID} home page
    </>
  );
}