"use client";

import { Button } from "@/components/ui/button";
import { EventType } from "@/lib/constants";
import { _event } from "@/lib/routes";
import { TicketPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventCard ({ id , name , headline , about , images , capacity , event_type }:EventType) {
    return (
        <div className="overflow-hidden w-full aspect-square flex flex-col rounded-sm">
            <Link href={_event(id)} className="overflow-hidden w-full aspect-video flex_center">
                <Image src={images[0]} height={900} width={1600} alt="event image" className="w-full h-full object-cover" />
            </Link>
            <div className="w-full flex-1 px-3 py-4 flex flex-col">
                <div className="w-full">
                    <h3 className="font-semibold text-lg lg:text-xl leading-none tracking-tight">
                        <Link href={_event(id)}>{name}</Link>
                    </h3>
                    <p className="text-sm font-medium font-muted-foreground mt-0.5">{headline}</p>
                </div>
                <div className="w-full flex-1 py-4">
                    <p className="text-sm max-w-prose">{about}</p>
                </div>
                <div className="w-full flex justify-between">
                    <Button className="rounded-none">
                        <Link href={_event(id)}>Book Your Ticket</Link>
                        <TicketPlus className="size-6 ml-2.5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}