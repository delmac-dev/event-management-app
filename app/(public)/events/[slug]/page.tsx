import { _attendEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Event({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <>
      <Header />
      <main className="main_container">
        <div className="sub_container flex flex-col xl:flex-row min-h-[calc(100vh-56px)] py-7 gap-8">
          <aside className="flex-1 h-full">
            <section className="w-full h-80 bg-muted">
              <Image src="/dddepth-150.jpg" height={900} width={1600} alt="banner" className="w-full h-full object-cover" />
            </section>
            <section className="mt-7">
              <h4 className="text-sm font-medium tacking-tight leading-none">7th Mar. 2024 | 6:30AM to 7:30PM</h4>
              <h1 className="text-xl font-semibold mt-2 leading-7 tracking-tight max-w-prose">Founder Institute Dhaka Graduate Showcase & Networking Event</h1>
            </section>
            <section className="mt-3">
              <div className="w-full rounded-lg">
                <p className="text-muted-foreground text-sm font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia totam ex, laborum sed optio itaque corporis, facere fugit maxime magnam temporibus incidunt quibusdam consequuntur provident iste esse. Ratione, voluptas.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia totam ex, laborum sed optio itaque corporis, facere fugit maxime magnam temporibus incidunt quibusdam consequuntur provident iste esse. Ratione, voluptas.
                </p>
              </div>
            </section>
            <section className="">
              <div className="tab_navigation_container py-4 px-2 flex justify-start items-center gap-3">

              </div>
            </section>
          </aside>
          <aside className="w-96 h-full">
            <section className="w-full flex flex-col gap-4">
              <div className="">
                <Button className="w-full rounded-none h-14">
                  <Link href={_attendEvent(slug)}>Attend This Event</Link>
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                {Array(3).fill("j").map((_, _id)=> < TicketCard key={_id} />)}
              </div>
            </section>
            <section className="w-full mt-7">
              <div className="w-full py-4">
                <h4 className="text-base font-semibold">Organised By</h4>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="aspect-square w-14 rounded-full bg-secondary"></div>
                <div>
                  <h2 className="text-base font-medium">Exclusive Club</h2>
                  <p className="text-sm text-muted-foreground">Your Network is Your Networth</p>
                </div>
              </div>
            </section>
            <section className="w-full mt-7">
              <div className="w-full py-4">
                <h4 className="text-base font-semibold">Categories</h4>
              </div>
              <div className="flex justify-start flex-wrap gap-2">
                {Array(10).fill("").map((_, _id)=>(
                  <p key={_id} className="text-xs text-xxs font-medium px-3 py-1 5 rounded-full border bg-muted text-muted-foreground">
                    Category {_id + 1}
                  </p>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
};

const TicketCard = () => (
  <div className="p-3 rounded-sm border flex justify-between">
    <div className="flex flex-col items-start">
      <h5 className="text-sm text-muted-foreground">General Tickets</h5>
      <p className="text-xs font-medium px-2 py-0.5 rounded-full mt-2 bg-secondary border">Free</p>
    </div>
    <div className="flex_center">
      0/25
    </div>
  </div>
)