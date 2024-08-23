"use client";

import { _ticket } from '@/lib/routes';
import { FetchedMyTickets } from '@/lib/types';
import { Ticket } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Image } from "lucide-react";
import NextImage from "next/image";

const TicketCard = (props: FetchedMyTickets ) => {
  const {ticket_code, full_name, email, id, status, payment_status, event: { name, banner }} = props;

  return (
    <div className="relative w-full bg-secondary/50 border border-secondary h-auto rounded-md p-2.5 flex flex-col justify-center items-center space-y-2">
        <div className="w-full mb-2 flex justify-start gap-2.5">
          <div className="h-full aspect-square rounded-full bg-secondary flex_center">
            <Ticket className='text-secondary-foreground size-5'/>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-secondary-foreground mb-0.5">{full_name}</h4>
            <p className="text-xs font-normal text-muted-foreground w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{email}</p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-lg leading-snug tracking-tight text-ellipsis line-clamp-2">{name}</h2>
        </div>
        <div className="relative overflow-hidden rounded-lg w-full aspect-video bg-muted flex_center">
          {banner ? 
              (<NextImage src={banner} alt={name} fill className='w-full h-full object-cover' />):
              (<Image className='size-7 text-muted-foreground' />)
          }
        </div>
        <Link href={_ticket(id)} className="text-muted-foreground hover:text-secondary-foreground text-sm font-medium flex-1 flex items-end">
          {ticket_code}
        </Link>
    </div>
  )
}

export default TicketCard