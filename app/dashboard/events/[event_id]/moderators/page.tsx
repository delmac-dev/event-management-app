import { QueryProps } from "@/types/global.type";

export default async function EventModerators({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <div className="">
      all {eventID} moderators page
    </div>
  );
}