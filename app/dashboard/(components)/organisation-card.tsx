"use client";
import { useState } from 'react';
import { _dashboardOrgEvents } from '@/lib/routes';
import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { Users, ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FetchedOrganisationProps } from '@/lib/types';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const OrganisationCard = (props: FetchedOrganisationProps) => {
  const { id, name, headline, about, avatar_url, organisation_members } = props;
  const totalMembers = organisation_members?.length || 0;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105  group">
      {/* Background Image */}
      <div className="absolute inset-0">
        {avatar_url ? (
          <NextImage src={avatar_url} alt={name} fill sizes="100vw" className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
        )}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-300" />

      {/* Main Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between transition-all duration-300">
        {/* Top Section: Group Icon and Name */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-inner bg-white/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
            <Users className="size-4 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-normal text-white line-clamp-2 drop-shadow-md capitalize transition-all duration-300">
              {name}
            </h4>
          </div>
        </div>

        {/* Bottom Section: Members and Action Button */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex -space-x-2">
            {organisation_members && organisation_members.length > 0 && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white transition-all duration-300">
                <NextImage src={organisation_members[0]} alt="member" fill className="object-cover" />
              </div>
            )}
            {totalMembers > 1 && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-500 flex items-center justify-center transition-all duration-300">
                <span className="text-xs font-medium text-white">+{totalMembers - 1}</span>
              </div>
            )}
          </div>
          <Link
            href={_dashboardOrgEvents(id)}
            className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-3 rounded-full flex items-center transition-colors duration-300 backdrop-blur-sm text-sm"
          >
            View Events <ChevronRight className="ml-1 size-3" />
          </Link>
        </div>
      </div>

      {/* Info Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/30 backdrop-blur-md p-6 flex flex-col transition-all duration-300",
          showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Headline Section */}
          <div className="mb-4">
            <label className="text-sm text-white/70 font-medium">Headline:</label>
            <p className="text-sm text-white/90 line-clamp-2 mb-2 drop-shadow font-roboto-mono capitalize">{headline}</p>
          </div>

          {/* About Section */}
          <div className="flex-1 overflow-y-auto">
            <label className="text-sm text-white/70 font-medium">About:</label>
            <CardDescription className="text-sm text-white/90 font-roboto-mono mb-4 capitalize">
              {about}
            </CardDescription>
          </div>
        </div>
      </div>

      {/* Info Button */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors duration-300 backdrop-blur-sm"
      >
        <Info className="size-4 text-white" />
      </button>
    </div>
  );
};

export default OrganisationCard;