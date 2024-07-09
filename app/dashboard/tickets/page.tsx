import { tickets } from "@/lib/constants";
import BodyHeader from "../(components)/body-header";
import BodyContent from "../(components)/body-content";
import TicketCard from "../(components)/ticket-card";

export default async function DashboardTickets() {

  return (
    <>
      <BodyHeader>
        <p className="text-xl font-medium">My Tickets</p>
      </BodyHeader>
      <BodyContent className="gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {tickets.map((ticket, _id) => (
          <TicketCard key={_id} {...ticket} />
        ))}
      </BodyContent>
    </>
  );
}