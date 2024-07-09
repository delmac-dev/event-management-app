"use client";

import { TicketType } from '@/lib/constants';
import { Ticket } from 'lucide-react';
import React from 'react'

const TicketCard = ({ticket_code, full_name, email}: TicketType ) => {
  return (
    <div className="relative w-full bg-bacground border h-72 rounded-lg p-5 flex flex-col justify-start items-center">
        <div className="w-24 h-24 rounded-full bg-secondary mb-5 flex_center">
            <Ticket className=" rotate-90 size-10 text-secondary-foreground"/>
        </div>
        <h4 className="text-sm font-semibold mb-2">{ticket_code}</h4>
        <h6 className="text-sm text-secondary-foreground capitalize">{full_name}</h6>
        <p className="text-muted-foreground text-sm text-center w-full overflow-hidden whitespace-nowrap overflow-ellipsis mb-5">{email}</p>
        <p className="px-2.5 py-1 rounded-sm text-xs bg-green-100 text-green-700">Completed</p>
</div>
  )
}

export default TicketCard