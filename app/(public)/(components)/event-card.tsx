"use client";

import { Button } from "@/components/ui/button";
import { _attendEvent, _event } from "@/lib/routes";
import { FetchedPublicEventsProps } from "@/lib/types";
import { TicketPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function EventCard (props: FetchedPublicEventsProps) {
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
                    <Badge variant="secondary" className="mt-1.5 text-xs text-orange-500 bg-orange-50"><p className="font-normal font-muted-foreground">{headline}</p></Badge>
                </div>
                <div className="w-full flex-1 mt-3">
                    <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis line-clamp-2">{about}</p>
                </div>
                <div className="w-full flex justify-center mt-3">
                    <Button size='xs' className="rounded-sm hover:text-green-400" variant="outline">
                        <Link href={_attendEvent(id)}>Book Ticket</Link>
                        <TicketPlus className="size-6 ml-2.5" strokeWidth={1} />
                    </Button>
                </div>
            </div>
        </div>
    )
}