import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import EventCard from "@/app/dashboard/(components)/event-card";
import NewEventHandler from "@/app/dashboard/(form-handlers)/new-event-handler";
import { events, organisations, OrgType } from "@/lib/constants";
import { QueryProps } from "@/lib/types";
import { findItem } from "@/lib/utils";

export default async function OrganisationEvents({ params }: QueryProps) {
  const organisationID = params.organisation_id;
  const data = findItem(organisationID, organisations) as OrgType;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Events</h2>
        <NewEventHandler />
      </BodyHeader>
      <BodyContent className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-7">
        {events.slice(0,2).map((event, _id) => (
          <EventCard key={_id} {...event} />
        ))}
      </BodyContent>
    </>
  );
}