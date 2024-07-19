import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { DataTable } from "@/components/common/data-table";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { columns } from "./columns";
import MemberHandler from "@/app/dashboard/(form-handlers)/member-handler";

export default async function OrganisationMembers({ params, searchParams }: QueryProps) {
  const organisationID = params.organisation_id;
  const isMemberFormOpen = searchParams.new as unknown as boolean;
  const memberHandlerData = {
    title: "Add a new member",
    isOpen: isMemberFormOpen
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Organisation Members</h2>
        <MemberHandler { ...memberHandlerData } />
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={[]} />
      </BodyContent>
    </>
  );
}