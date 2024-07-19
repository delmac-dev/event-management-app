import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { DataTable } from "@/components/common/data-table";
import { QueryProps } from "@/lib/types";
import { columns, Moderator } from "./columns";
import ModeratorHandler from "@/app/dashboard/(form-handlers)/moderator-handler";

const moderators: Moderator[] = [
  {
    full_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    is_active: "Yes",
    role: "Lead Moderator"
  },
  {
    full_name: "Brian Lee",
    email: "brian.lee@example.com",
    is_active: "No",
    role: "Assistant Moderator"
  },
  {
    full_name: "Catherine Miller",
    email: "catherine.miller@example.com",
    is_active: "Yes",
    role: "Community Manager"
  },
  {
    full_name: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    is_active: "Yes",
    role: "Event Coordinator"
  },
  {
    full_name: "Eva Martinez",
    email: "eva.martinez@example.com",
    is_active: "No",
    role: "Technical Support"
  }
];

export default async function EventModerators({ params, searchParams }: QueryProps) {
  const eventID = params.event_id;
  const isModeratorFormOpen = searchParams.new as unknown as boolean;
  const moderatorHandlerData = {
    title: "Add a new moderator",
    isOpen: isModeratorFormOpen
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Event Moderators</h2>
        <ModeratorHandler { ...moderatorHandlerData } />
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={moderators} />
      </BodyContent>
    </>
  );
}