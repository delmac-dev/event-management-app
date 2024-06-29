import { QueryProps } from "@/types/global.type";

export default async function Ticket({ params }: QueryProps) {
  const ticketID = params.ticket_id;

  return (
    <main className="w-full min-h-screen flex_center">
      {ticketID} ticket detail page
    </main>
  );
}