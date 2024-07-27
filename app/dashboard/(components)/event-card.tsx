"use client";
import { _dashboardEventTickets } from '@/lib/routes';
import { cn, convertTo12HourFormat, formatDate } from '@/lib/utils';
import NextImage from 'next/image';
import { Calendar, Clock3, ArrowRight, Image, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FetchedEventProps } from '@/lib/types';

const EventCard = ({ id, name, headline, banner, event_date, start_at, about }: FetchedEventProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group w-full border rounded-xl shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative w-full aspect-video overflow-hidden">
        <Link href={_dashboardEventTickets(id)} className="block w-full h-full">
          {banner ? (
            <NextImage
              src={banner}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <Image className="size-16 text-white animate-pulse" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden" />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/60 md:bg-transparent md:transform md:translate-y-full md:group-hover:translate-y-0 transition-all duration-300">
          <p className="text-sm font-medium mb-1 flex items-center">
            <Tag className="size-4 mr-2" />
            <span className="capitalize font-roboto-mono">{headline}</span>
          </p>
        </div>
      </div>
      <div className="px-6 py-4 bg-white">
        <h4 className="text-xl font-bold text-gray-800 mb-3 w-full">
          <Link
            href={_dashboardEventTickets(id)}
            className="capitalize hover:text-blue-600 transition-colors duration-300 block w-full overflow-hidden whitespace-nowrap text-ellipsis leading-normal tracking-tight text-left"
          >
            {name}
          </Link>
        </h4>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40' : 'max-h-12'}`}>
          <p className="text-sm text-gray-600 leading-relaxed tracking-wide font-roboto-mono">{about}</p>
        </div>
        <button 
          onClick={toggleExpand}
          className="text-blue-500 text-sm font-normal mt-2 flex items-center focus:outline-none "
        >
          {isExpanded ? (
            <>
              Read less <ChevronUp className="ml-1 size-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1 size-4" />
            </>
          )}
        </button>
        <div className="flex items-center justify-between text-gray-500 mt-4">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-blue-500" />
            <p className="text-sm font-medium">{formatDate(event_date)}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="size-4 text-blue-500" />
            <p className="text-sm font-medium">{convertTo12HourFormat(start_at)}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-50 flex justify-between items-center border-t">
        <p className="text-sm font-medium text-gray-600 font-roboto-mono">View Details</p>
        <Link href={_dashboardEventTickets(id)}>
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg group">
            <ArrowRight className="size-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;