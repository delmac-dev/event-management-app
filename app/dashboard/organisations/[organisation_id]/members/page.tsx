import BodyHeader from "@/app/dashboard/(components)/body-header";
import { QueryProps } from "@/lib/types";
import MemberHandler from "@/app/dashboard/(form-handlers)/member-handler";
import MembersContainer from "@/app/dashboard/(components)/members-container";

export default async function OrganisationMembers({ params, searchParams }: QueryProps) {
  const orgID = params.organisation_id;
  const isMemberFormOpen = searchParams.new as unknown as boolean;
  const memberHandlerData = {
    title: "Add a new member",
    isOpen: isMemberFormOpen,
    orgID
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Members</h2>
        <MemberHandler { ...memberHandlerData } />
      </BodyHeader>
      <MembersContainer organisationID={orgID} />
    </>
  );
}