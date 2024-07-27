import BodyHeader from "../(components)/body-header";
import MyTicketContainer from "../(components)/my-tickets-container";

export default async function DashboardTickets() {

  return (
    <>
      <BodyHeader>
        <p className="text-xl font-medium">My Tickets</p>
      </BodyHeader>
      <MyTicketContainer />
    </>
  );
}