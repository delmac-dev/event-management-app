import { AttendHeader } from "@/app/(public)/(components)/attend-event-components";
import { QueryProps } from "@/lib/types";

export default async function EventJoin({ params }: QueryProps) {
    const slug = params.slug;

    return (
        <>
            <AttendHeader />
            <main className="main_container">
                <section className="sub_container py-10 flex_center flex-col">
                    <h1 className="text-xl font-normal">Attend Event</h1>
                    <p className="text-base font-light text-muted-foreground">Purchase This Ticket Now</p>
                </section>
                <div className="sub_container py-10 flex_center flex-col gap-4">
                    {Array(3).fill("i").map((_, _id) => (
                        <div key={_id} className="relative w-80 h-20 bg-primary flex justify-between">
                            <div className="flex-1 p-4">
                                <h2 className="text-lg text-primary-foreground">Early Bird</h2>
                                <p className="text-xs font-medium text-muted-foreground mt-1">Only 48 ticket left</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}