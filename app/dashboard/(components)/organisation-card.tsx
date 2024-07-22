"use client";

import { _dashboardOrgEvents } from '@/lib/routes';
import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { ChevronRight, Image } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FetchedOrganisationProps } from '@/lib/types';

const OrganisationCard = (props: FetchedOrganisationProps) => {
  const {id, name, headline, about, avatar_url, organisation_members} = props;
  
  return (
    <div className="w-full h-44 rounded-sm flex flex-col border gap-3">
        <div className="w-full flex gap-2 px-4 pt-4">
          <Link href={_dashboardOrgEvents(id)} className="relative z-0 overflow-hidden size-10 rounded-full bg-muted flex_center">
            {avatar_url? 
              (<NextImage src={avatar_url} alt={name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className='object-cover' />):
              (<Image className='size-5 text-muted-foreground/60' />)           }
          </Link>
          <div className="flex-1 h-full flex flex-col justify-center">
            <h4 className="text-sm font-medium max-w-full overflow-hidden text-ellipsis text-nowrap">
              <Link href={_dashboardOrgEvents(id)}>
                {name}
              </Link>
            </h4>
            <p className="text-xs text-muted-foreground mt-1 5">{headline}</p>
          </div>
        </div>
        <div className="w-full flex-1 px-4">
          <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis line-clamp-2">{about}</p>
        </div>
        <div className="w-full h-10 bg-muted/40 border-t px-4 flex items-center justify-between">
          <div className="flex h-full items-center">
            {organisation_members?.map((image_url, _id)=>(
              <div key={_id} className={cn("relative -ml-3 size-6 border-2 border-background aspect-square first:ml-0 rounded-full overflow-hidden")}>
                <NextImage src={image_url} alt='profile-pic' fill /> 
              </div>
            ))}
          </div>
          <ChevronRight className='size-5 text-muted-foreground'/>
        </div>
    </div>
  )
}

export default OrganisationCard;