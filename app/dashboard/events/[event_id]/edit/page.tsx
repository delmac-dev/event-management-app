import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";
import { ModifyEventForm } from "@/components/forms/modify-event";
import { _dashboardEvents } from "@/lib/routes";
import { QueryProps } from "@/lib/types";

const demo = async () => {
  "use server";
}

export default async function OrganisationEdit({ params }: QueryProps) {
  const eventID = params.event_id;
  const deleteHandlerData = {
    title: "Delete this event",
    description: "All attendee and other data associated with this event will also be deleted along side the event",
    buttonText: "Delete Event",
    deleteAction: demo,
    redirectTo: _dashboardEvents,
    queryKey: []
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Event</h2>
      </BodyHeader>
      <BodyContent className="space-y-4">
        <ModifyEventForm eventID={eventID} />
        <DeleteHandler { ...deleteHandlerData } />
      </BodyContent>
    </>
  );
}