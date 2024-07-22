import BodyHeader from "@/app/dashboard/(components)/body-header";
import { QueryProps } from "@/lib/types";
import TicketHandler from "@/app/dashboard/(form-handlers)/ticket-handler";
import TicketsContainer from "@/app/dashboard/(components)/tickets-container";

export default async function EventTickets({ params, searchParams }: QueryProps) {
  const eventID = params.event_id;
  const isTicketFormOpen = searchParams.new as unknown as boolean;
  const ticketHandlerData = {
    title: "Add a new ticket",
    isOpen: isTicketFormOpen,
    eventID
  }
  
  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Event Tickets</h2>
        <TicketHandler { ...ticketHandlerData } />
      </BodyHeader>
      <TicketsContainer eventID={eventID} />
    </>
  );
}