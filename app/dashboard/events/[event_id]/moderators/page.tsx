import { QueryProps } from "@/lib/types";

export default async function EventModerators({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <div className="">
      all {eventID} moderators page
    </div>
  );
}