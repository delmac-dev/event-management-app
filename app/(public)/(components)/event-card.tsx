"use client";

import { Button } from "@/components/ui/button";
import { _attendEvent, _event } from "@/lib/routes";
import { fetchedPublicEventsProps } from "@/lib/types";
import { TicketPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventCard (props: fetchedPublicEventsProps) {
    const {id, banner, name, headline, about} = props;

    return (
        <div className="w-full flex flex-col rounded-sm p-3 border bg-background">
            <Link href={_event(id)} className="relative z-0 overflow-hidden w-full aspect-video flex_center">
                <Image src={banner} fill alt="event image" className="w-full h-full object-cover" />
            </Link>
            <div className="w-full flex-1 pt-4 flex flex-col">
                <div className="w-full">
                    <h3 className="font-medium text-lg leading-none tracking-tight truncate">
                        <Link href={_event(id)}>{name}</Link>
                    </h3>
                    <p className="text-xs font-normal font-muted-foreground mt-1.5">{headline}</p>
                </div>
                <div className="w-full flex-1 mt-3">
                    <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis line-clamp-2">{about}</p>
                </div>
                <div className="w-full flex justify-between mt-3">
                    <Button size='sm' className="rounded-none">
                        <Link href={_attendEvent(id)}>Book Your Ticket</Link>
                        <TicketPlus className="size-6 ml-2.5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}