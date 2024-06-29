import { QueryProps } from "@/types/global.type";

export default async function EventAttendees({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <div className="">
      all {eventID} attendees page
    </div>
  );
}