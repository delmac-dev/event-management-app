import { QueryProps } from "@/lib/types";

export default async function EventAttendees({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <div className="">
      event attendees page
    </div>
  );
}