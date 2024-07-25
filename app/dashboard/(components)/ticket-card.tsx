"use client";

import { _ticket } from '@/lib/routes';
import { FetchedMyTickets } from '@/lib/types';
import Link from 'next/link';
import React from 'react'

const TicketCard = (props: FetchedMyTickets ) => {
  const {ticket_code, full_name, email, id, status, payment_status, } = props;

  return (
    <div className="relative w-full bg-bacground border h-72 rounded-lg p-5 flex flex-col justify-center items-center">
        <h4 className="text-sm font-semibold mb-2">{ticket_code}</h4>
        <h6 className="text-sm text-secondary-foreground capitalize">{full_name}</h6>
        <p className="text-muted-foreground text-sm text-center w-full overflow-hidden whitespace-nowrap overflow-ellipsis mb-5">{email}</p>
        <p className="px-2.5 py-1 rounded-sm text-xs bg-green-100 text-green-700">{status}</p>
        <Link href={_ticket(id)} className="text-blue-600 hover:text-blue-800 text-sm font-medium flex-1 flex items-end">
          View Ticket Details
        </Link>
</div>
  )
}

export default TicketCard