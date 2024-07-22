import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { ModifyEventForm } from "@/components/forms/modify-event";
import { _dashboardEvents } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

export default async function OrganisationEdit({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Event</h2>
      </BodyHeader>
      <BodyContent className="space-y-4">
        <ModifyEventForm eventID={eventID} />
      </BodyContent>
    </>
  );
}