import { QueryProps } from "@/lib/types";

export default async function EventRoles({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <div className="">
      all {eventID} roles page
    </div>
  );
}