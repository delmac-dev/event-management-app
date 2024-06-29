import { QueryProps } from "@/types/global.type";

export default async function EventTickets({ params }: QueryProps) {
  const eventID = params.event_id;
  
  return (
    <div className="">
      all {eventID} tickets page
    </div>
  );
}