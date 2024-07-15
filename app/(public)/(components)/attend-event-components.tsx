"use client";

import HandleTicketBookingForm from "@/components/forms/handle-ticket-booking";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AttendeeBookingForm() {
    return (
      <section className="relative sub_container flex_center flex-col rounded-none md:rounded-lg bg-bacground p-4 h-screen md:max-h-[640px] border-t-8 border-secondary-foreground shadow-md">
        <AttendHeader />
        <HandleTicketBookingForm event={null} />
      </section>
    )
}

function AttendHeader() {
    const router = useRouter();

    return (
        <div className="w-full h-16 flex items-center justify-start">
            <Button variant='outline' className="h-10 w-10 p-0 rounded-full" onClick={() => router.back()}>
                <ArrowLeftIcon className="text-muted-foreground" />
            </Button>
            <div className="flex-1 flex_center">
                <h3 className="text-base font-medium text-muted-foreground">Attend this event now</h3>
            </div>
        </div>
    )
}