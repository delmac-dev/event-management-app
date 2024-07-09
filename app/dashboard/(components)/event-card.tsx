"use client";

import { EventType } from '@/lib/constants';
import { _dashboardEventTickets } from '@/lib/routes';
import Link from 'next/link';
import React from 'react'

const EventCard = ({id, name}: EventType) => {
  return (
    <div className="w-full bg-blue-500 h-16 rounded-sm p-2.5">
        <Link href={_dashboardEventTickets(id)} className="block w-full text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
            {name}
        </Link>
        {/* some more details and edit and delete and show buttons */}
    </div>
  )
}

export default EventCard