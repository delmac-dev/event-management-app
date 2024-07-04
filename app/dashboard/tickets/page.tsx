import { ArchiveX, Ticket } from "lucide-react";
import Breadcrumbs from "../(components)/breadcrumbs";
import { Button } from "@/components/ui/button";
import { tickets } from "@/lib/constants";
import Link from "next/link";

export default async function DashboardTickets() {

  return (
    <>
      <Breadcrumbs />
      <section className="section flex items-center justify-between">
        <p className="text-2xl font-semibold">My Tickets</p>
      </section>
      <section className="section">
        <p className="text-sm">Filter</p>
      </section>
      {/* <section className="section">
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Tickets Yet
          <Button size='xs'>See Upcoming Events</Button>
        </div>
      </section> */}
      <section className="section gap-2 md:gap-3 lg:gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {tickets.map((ticket, _id) => (
          <div key={_id} className="relative w-full bg-bacground border h-72 rounded-lg p-5 flex flex-col justify-start items-center">
            {/* <Button size='sm' variant='ghost' className="absolute top-5 right-5 w-8 h-8 rounded-full p-0 flex-col">
            </Button> */}
            <div className="w-24 h-24 rounded-full bg-secondary mb-5 flex_center">
              <Ticket className=" rotate-90 size-10 text-secondary-foreground"/>
            </div>
            <h4 className="text-sm font-semibold mb-2">{ticket.ticket_code}</h4>
            <h6 className="text-sm text-secondary-foreground capitalize">{ticket.full_name}</h6>
            <p className="text-muted-foreground text-sm text-center w-full overflow-hidden whitespace-nowrap overflow-ellipsis mb-5">{ticket.email}</p>
            <p className="px-2.5 py-1 rounded-sm text-xs bg-green-100 text-green-700">Completed</p>
          </div>
        ))}
      </section>
    </>
  );
}