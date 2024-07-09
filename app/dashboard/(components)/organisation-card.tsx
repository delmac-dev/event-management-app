"use client";

import { OrgType } from '@/lib/constants';
import { _dashboardOrgEvents } from '@/lib/routes';
import Link from 'next/link';
import React from 'react'

const OrganisationCard = ({id, name}: OrgType) => {
  return (
    <div className="w-full bg-blue-500 h-16 rounded-sm p-2.5">
        <Link href={_dashboardOrgEvents(id)} className="block w-full text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
            {name}
        </Link>
        {/* some more details and edit and delete and show buttons */}
    </div>
  )
}

export default OrganisationCard;