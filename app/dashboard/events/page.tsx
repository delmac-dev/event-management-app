import { _dashboardEvent } from "@/lib/routes";
import Breadcrumbs from "../(components)/breadcrumbs";
import { QueryProps } from "@/lib/types";
import { NewEventModal } from "../(forms)/new-event";
import { ArchiveX } from "lucide-react";
import { events } from "@/lib/constants";
import Link from "next/link";

export default async function DashboardEvents({ searchParams }: QueryProps) {
  const isEventFormOpen = searchParams.new as unknown as boolean;

  return (
    <>
      <Breadcrumbs />
      <section className="section flex items-center justify-between">
        <p className="text-2xl font-semibold">Events</p>
        <NewEventModal isOpen={isEventFormOpen} />
      </section>
      <section className="section">
        <p className="text-sm">Filter</p>
      </section>
      {/* <section className="section">
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Events Yet
          <NewEventModal />
        </div>
      </section> */}
      <section className="section gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, _id) => (
          <div key={_id} className="w-full bg-blue-500 h-16 rounded-sm p-2.5">
            <Link href={_dashboardEvent(event.id)} className="block w-full text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
              {event.name}
            </Link>
            {/* some more details and edit and delete and show buttons */}
          </div>
        ))}
      </section>
    </>
  );
}