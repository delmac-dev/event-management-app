import BodyHeader from "@/app/dashboard/(components)/body-header";
import OrgEventContainer from "@/app/dashboard/(components)/org-events-container";
import NewEventHandler from "@/app/dashboard/(form-handlers)/new-event-handler";
import { QueryProps } from "@/lib/types";

export default async function OrganisationEvents({ params }: QueryProps) {
  const organisationID = params.organisation_id;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Events</h2>
        <NewEventHandler organisationID={organisationID} />
      </BodyHeader>
      <OrgEventContainer organisationID={organisationID} />
    </>
  );
}