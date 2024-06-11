import { QueryProps } from "@/lib/types";

export default async function EventTickets({ params }: QueryProps) {
  const eventID = params.event_id;
  
  return (
    <div className="">
      all {eventID} tickets page
    </div>
  );
}