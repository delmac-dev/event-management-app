"use client";

import { EventType } from '@/lib/constants';
import { _dashboardEventTickets } from '@/lib/routes';
import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { Clock3, Forward, Image } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const EventCard = ({id, name, headline}: EventType) => {
  return (
    <div className="w-full border h-80 flex flex-col">
      <div className="w-full aspect-video p-3">
        <div className="w-full h-full">
          <Link href={_dashboardEventTickets(id)} className='w-full h-full overflow-hidden flex_center bg-muted'>
            <Image className='size-7 text-muted-foreground' />
          </Link>
        </div>
      </div>
      <div className="px-3 flex-1">
        <h4 className="text-base text-secondary-foreground font-medium">
          <Link href={_dashboardEventTickets(id)}>
            {name}
          </Link>
        </h4>
        <p className="text-xs font-medium text-muted-foreground">{headline}</p>
      </div>
      <div className="p-3 flex gap-2 items-center">
        <Clock3 className='size-5 text-muted-foreground' />
        <p className="text-xs text-muted-foreground font-medium">12th Feb. 2020 | 9:15 AM</p>
      </div>
      <div className="px-3 pb-3 h-12 flex justify-between">
        <div className="flex h-full items-center">
          {Array(4).fill("").map((_, _id)=>(
            <div key={_id} className={cn("relative -ml-4 size-8 border-2 border-background aspect-square first:ml-0 rounded-full overflow-hidden")}>
              <NextImage src="/dddepth-164.jpg" alt='profile-pic' fill /> 
            </div>
          ))}
        </div>
        <div className="h-full aspect-square flex_center">
          <Forward className='size-6 text-muted-foreground' />
        </div>
      </div>
    </div>
  )
}

export default EventCard