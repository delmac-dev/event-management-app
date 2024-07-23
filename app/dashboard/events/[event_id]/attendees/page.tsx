import BodyHeader from "@/app/dashboard/(components)/body-header";
import { QueryProps } from "@/lib/types";
import AttendeeHandler from "@/app/dashboard/(form-handlers)/attendee-handler";
import AttendeesContainer from "@/app/dashboard/(components)/attendees-container";

export default async function EventAttendees({ params, searchParams }: QueryProps) {
  const eventID = params.event_id;
  const isAttendeeFormOpen = searchParams.new as unknown as boolean;
  const attendeeHandlerData = {
    title: "Add a new attendee",
    isOpen: isAttendeeFormOpen,
    eventID
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Event Attendees</h2>
        <AttendeeHandler { ...attendeeHandlerData } />
      </BodyHeader>
      <AttendeesContainer eventID={eventID} />
    </>
  );
}