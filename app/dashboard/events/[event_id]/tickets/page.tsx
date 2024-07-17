import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { DataTable } from "@/components/common/data-table";
import { columns, Ticket } from "./columns";

const tickets: Ticket[] = [
  {
      name: "Concert A",
      availability: "Available",
      total_tickets: "200",
      ticket_type: "General Admission",
      price: "50"
  },
  {
      name: "Theater Play B",
      availability: "Sold Out",
      total_tickets: "150",
      ticket_type: "VIP",
      price: "100"
  },
  {
      name: "Sports Event C",
      availability: "Limited",
      total_tickets: "500",
      ticket_type: "Standard",
      price: "75"
  },
  {
      name: "Music Festival D",
      availability: "Available",
      total_tickets: "1000",
      ticket_type: "Early Bird",
      price: "60"
  },
  {
      name: "Comedy Show E",
      availability: "Available",
      total_tickets: "300",
      ticket_type: "Balcony",
      price: "40"
  },
  {
      name: "Conference F",
      availability: "Available",
      total_tickets: "250",
      ticket_type: "Regular",
      price: "120"
  },
  {
      name: "Workshop G",
      availability: "Limited",
      total_tickets: "80",
      ticket_type: "Student",
      price: "30"
  },
  {
      name: "Seminar H",
      availability: "Sold Out",
      total_tickets: "100",
      ticket_type: "Early Bird",
      price: "50"
  },
  {
      name: "Art Exhibition I",
      availability: "Available",
      total_tickets: "500",
      ticket_type: "General Admission",
      price: "20"
  },
  {
      name: "Tech Talk J",
      availability: "Limited",
      total_tickets: "200",
      ticket_type: "VIP",
      price: "150"
  }
];

export default async function EventTickets({ params }: QueryProps) {
  const eventID = params.event_id;
  
  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Event Tickets</h2>
        <Button size='xs'>Add a ticket</Button>
      </BodyHeader>
      <BodyContent>
        <DataTable columns={columns} data={tickets} />
      </BodyContent>
    </>
  );
}