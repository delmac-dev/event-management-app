import { events, EventType } from "@/lib/constants";
import { QueryProps } from "@/lib/types";
import { findItem } from "@/lib/utils";

export default async function DashboardOrganisation({ params }: QueryProps) {
  const eventID = params.event_id;
  const data = findItem(eventID, events) as EventType;

  return (
    <>
      <section className="overflow-hidden section_body my-1 bg-secondary h-72 rounded-lg p-0">
        <img src={data?.images[0]} className="w-full h-full object-cover" />
      </section>
    </>
  );
}