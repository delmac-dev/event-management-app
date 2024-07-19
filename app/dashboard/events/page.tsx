import { _dashboardEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import NewEventHandler from "../(form-handlers)/new-event-handler";
import { events } from "@/lib/constants";
import BodyHeader from "../(components)/body-header";
import BodyContent from "../(components)/body-content";
import EventCard from "../(components)/event-card";

export default async function DashboardEvents({ searchParams }: QueryProps) {
  const isEventFormOpen = searchParams.new as unknown as boolean;

  return (
    <>
      <BodyHeader>
        <p className="text-xl font-medium">Events</p>
        <NewEventHandler isOpen={isEventFormOpen} />
      </BodyHeader>
      <BodyContent className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7">
        {events.map((event, _id) => (
          <EventCard key={_id} {...event} />
        ))}
      </BodyContent>
    </>
  );
}