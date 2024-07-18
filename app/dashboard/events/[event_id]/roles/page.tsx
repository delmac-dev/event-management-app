import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/common/data-table";

export default async function EventRoles({ params }: QueryProps) {
  const eventID = params.event_id;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Moderator Roles</h2>
        <Button size='xs'>Add a role</Button>
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={[]} />
      </BodyContent>
    </>
  );
}