import { QueryProps } from "@/lib/types";

export default async function Ticket({ params }: QueryProps) {
  const ticketID = params.ticket_id;

  return (
    <main className="w-full min-h-screen flex_center">
      {ticketID} ticket detail page
    </main>
  );
}