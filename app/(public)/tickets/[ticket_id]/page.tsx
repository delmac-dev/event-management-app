import { QueryProps } from "@/lib/types";

export default async function Ticket({ params }: QueryProps) {
  const ticketID = params.ticket_id;

  return (
    <div className="">
      {ticketID} page
    </div>
  );
}