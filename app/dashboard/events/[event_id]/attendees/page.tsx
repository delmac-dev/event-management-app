import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { QueryProps } from "@/lib/types";
import { Attendee, columns } from "./columns";
import { DataTable } from "@/components/common/data-table";
import AttendeeHandler from "@/app/dashboard/(form-handlers)/attendee-handler";

const attendees: Attendee[] = [
  {
    full_name: "John Doe",
    email: "john.doe@example.com",
    ticket_code: "ABC123",
    status: "Checked In",
    payment_status: "Paid"
  },
  {
    full_name: "Jane Smith",
    email: "jane.smith@example.com",
    ticket_code: "DEF456",
    status: "Not Checked In",
    payment_status: "Pending"
  },
  {
    full_name: "Robert Brown",
    email: "robert.brown@example.com",
    ticket_code: "GHI789",
    status: "Checked In",
    payment_status: "Paid"
  },
  {
    full_name: "Emily Johnson",
    email: "emily.johnson@example.com",
    ticket_code: "JKL012",
    status: "Not Checked In",
    payment_status: "Paid"
  },
  {
    full_name: "Michael Williams",
    email: "michael.williams@example.com",
    ticket_code: "MNO345",
    status: "Checked In",
    payment_status: "Paid"
  },
  {
    full_name: "Sarah Davis",
    email: "sarah.davis@example.com",
    ticket_code: "PQR678",
    status: "Checked In",
    payment_status: "Pending"
  },
  {
    full_name: "David Wilson",
    email: "david.wilson@example.com",
    ticket_code: "STU901",
    status: "Not Checked In",
    payment_status: "Paid"
  },
  {
    full_name: "Laura Martinez",
    email: "laura.martinez@example.com",
    ticket_code: "VWX234",
    status: "Checked In",
    payment_status: "Paid"
  },
  {
    full_name: "James Anderson",
    email: "james.anderson@example.com",
    ticket_code: "YZA567",
    status: "Not Checked In",
    payment_status: "Pending"
  },
  {
    full_name: "Linda Thompson",
    email: "linda.thompson@example.com",
    ticket_code: "BCD890",
    status: "Checked In",
    payment_status: "Paid"
  }
];

export default async function EventAttendees({ params, searchParams }: QueryProps) {
  const eventID = params.event_id;
  const isAttendeeFormOpen = searchParams.new as unknown as boolean;
  const attendeeHandlerData = {
    title: "Add a new attendee",
    isOpen: isAttendeeFormOpen,
    eventID
  }

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Event Attendees</h2>
        <AttendeeHandler { ...attendeeHandlerData } />
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={attendees} />
      </BodyContent>
    </>
  );
}