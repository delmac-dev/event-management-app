import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { QueryProps } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/common/data-table";
import ModeratorRoleHandler from "@/app/dashboard/(form-handlers)/moderator-role-handler";

export default async function EventRoles({ params, searchParams }: QueryProps) {
  const eventID = params.event_id;
  const isRoleFormOpen = searchParams.new as unknown as boolean;
  const roleHandlerData = {
    title: "Add a new role",
    isOpen: isRoleFormOpen
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Moderator Roles</h2>
        <ModeratorRoleHandler { ...roleHandlerData } />
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={[]} />
      </BodyContent>
    </>
  );
}