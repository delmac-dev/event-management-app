import { _dashboardEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import NewEventHandler from "../(form-handlers)/new-event-handler";
import BodyHeader from "../(components)/body-header";
import EventsContainer from "../(components)/events-container";

export default async function DashboardEvents({ searchParams }: QueryProps) {
  const isEventFormOpen = searchParams.new as unknown as boolean;

  return (
    <>
      <BodyHeader>
        <p className="text-xl font-medium">Events</p>
        <NewEventHandler isOpen={isEventFormOpen} />
      </BodyHeader>
      <EventsContainer />
    </>
  );
}