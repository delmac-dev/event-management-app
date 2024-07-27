import AttendeeBookingForm from "@/app/(public)/(components)/attend-event-components";
import { QueryProps } from "@/lib/types";

export default async function EventJoin({ params }: QueryProps) {
    const eventID = params.slug;

    return (
        <main className="relative main_container h-screen flex_center flex-1 md:px-4">
            <AttendeeBookingForm eventID={eventID} />
        </main>
    );
}