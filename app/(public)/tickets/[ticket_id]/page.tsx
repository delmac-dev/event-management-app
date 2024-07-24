import { getPublicTicket } from "@/lib/queries";
import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";

export default async function Ticket({ params }: QueryProps) {
  const ticketID = params.ticket_id;
  const ticketDetail = await getPublicTicket({id: ticketID});

  return (
    <>
      <Header />
      <main className="main_container flex-1 bg-orange-300">
        {ticketID} ticket detail page
      </main>
    </>
  );
}