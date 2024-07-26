"use client";

import { Button } from "@/components/ui/button";
import { _attendEvent, _event } from "@/lib/routes";
import { FetchedPublicEventsProps } from "@/lib/types";
import { dateAvatar } from "@/lib/utils";
import { TicketPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventCard (props: FetchedPublicEventsProps) {
    const {id, banner, name, headline, about, event_date} = props;
    const date = dateAvatar(event_date);

    return (
        <div className="w-full h-auto flex flex-col rounded-sm border bg-secondary/80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
            <div className="w-full relative z-0 isolate overflow-hidden aspect-video flex_center">
                <Link href={_event(id)} className="w-full h-full">
                    <Image src={banner} fill alt="event image" className="w-full h-full object-cover" />
                </Link>
                <div className="absolute left-3 top-3 rounded-lg border-2 bg-secondary flex_center flex-col size-16">
                    <p className="text-foreground text-lg font-bold">{date.day}</p>
                    <p className="text-muted-foreground text-base font-bold">{date.month}</p>
                </div>
            </div>
            <div className="isolate w-full min-h-48 max-h-48 flex-1 p-4 pt-8 flex flex-col relative z-0">
                <div className="w-full absolute z-50 h-12 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center">
                    <Button className="rounded-full border bg-secondary hover:bg-secondary/80 backdrop-blur-xl text-secondary-foreground font-medium" asChild>
                        <Link href={_attendEvent(id)}>
                            Book Ticket
                            <TicketPlus className="size-6 ml-2.5" strokeWidth={1} />
                        </Link>
                    </Button>

                </div>
                <div className="w-full">
                    <h3 className="font-medium text-lg leading-snug tracking-tight text-ellipsis line-clamp-2 mb-1.5">
                        <Link href={_event(id)}>{name}</Link>
                    </h3>
                    <p className="text-xs font-normal font-muted-foreground truncate">{headline}</p>
                </div>
                <div className="w-full flex-1 mt-3">
                    <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis line-clamp-3">{about}</p>
                </div>
            </div>
        </div>
    )
}