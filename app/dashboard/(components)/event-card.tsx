"use client";

import { _dashboardEventTickets } from '@/lib/routes';
import { cn, convertTo12HourFormat, formatDate } from '@/lib/utils';
import NextImage from 'next/image';
import { Clock3, Forward, Image } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FetchedEventProps } from '@/lib/types';

const EventCard = ({id, name, headline, banner, event_date, start_at, about}: FetchedEventProps) => {
  
  return (
    <div className="w-full border h-[360px] flex flex-col">
      <div className="w-full aspect-video p-3">
        <div className="relative z-0 w-full h-full overflow-hidden">
          <Link href={_dashboardEventTickets(id)} className='w-full h-full overflow-hidden flex_center bg-muted'>
            {banner ? 
              (<NextImage src={banner} alt={name} fill className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />):
              (<Image className='size-7 text-muted-foreground' />)
            }
          </Link>
        </div>
      </div>
      <div className="px-3 flex-1">
        <h4 className="text-base text-secondary-foreground font-medium text-wrap line-clamp-2 text-ellipsis">
          <Link href={_dashboardEventTickets(id)}>{name}</Link>
        </h4>
        <p className="text-xs font-medium text-muted-foreground line-clamp-1 text-ellipsis">{headline}</p>
      </div>
      <div className="flex-1 p-3 flex gap-2 items-center">
        <p className="text-sm text-secondary-foreground text-wrap line-clamp-3 text-ellipsis">{about}</p>
      </div>
      <div className="px-3 pb-3 h-12 flex justify-between">
        <div className="flex gap-2 items-center justify-start">
          <Clock3 className='size-4 text-muted-foreground' />
          <p className="text-xs text-muted-foreground font-medium">{formatDate(event_date)} | {convertTo12HourFormat(start_at)}</p>
        </div>
        <Link href={_dashboardEventTickets(id)} className="h-full aspect-square flex_center bg-muted/50 hover:bg-muted/70 rounded-sm">
          <Forward className='size-5 text-muted-foreground' />
        </Link>
      </div>
    </div>
  )
}

export default EventCard