"use client";

import HandleTicketBookingForm from "@/components/forms/handle-ticket-booking";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AttendeeBookingForm({eventID}:{eventID: string}) {
    return (
      <section className="relative sub_container flex_center justify-start flex-col rounded-none md:rounded-lg bg-secondary p-4 h-dvh md:max-h-[640px] border-t-8 border-secondary-foreground shadow-md">
        <AttendHeader /> 
        <HandleTicketBookingForm eventID={eventID} />
      </section>
    )
}

function AttendHeader() {
    const router = useRouter();

    return (
        <div className="w-full h-16 flex items-center justify-start">
            <Button variant='outline' className="group h-10 w-10 p-0 rounded-full bg-secondary" onClick={() => router.back()}>
                <ArrowLeftIcon className="text-muted-foreground group-hover:text-foreground" />
            </Button>
            <div className="flex-1 flex_center">
                <h3 className="text-base md:text-lg font-normal text-muted-foreground">Attend this event now</h3>
            </div>
        </div>
    )
}