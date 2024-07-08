import { _attendEvent } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Event({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <>
      <Header />
      <main className="main_container">
        <div className="sub_container flex flex-col xl:flex-row min-h-[calc(100vh-56px)] py-7 gap-8">
          <aside className="flex-1 h-full">
            <section className="w-full h-80 bg-muted">
              {/*image goes here*/}
            </section>
            <section className="mt-7">
              <h4 className="text-sm font-medium tacking-tight leading-none">7th Mar. 2024 | 6:30</h4>
              <h1 className="text-xl font-semibold mt-2 leading-7 tracking-tight max-w-prose">Founder Institute Dhaka Graduate Showcase & Networking Event</h1>
            </section>
            <section className="mt-6">
              <div className="w-full rounded-lg bg-muted p-3">
                <p className="text-muted-foreground text-sm font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia totam ex, laborum sed optio itaque corporis, facere fugit maxime magnam temporibus incidunt quibusdam consequuntur provident iste esse. Ratione, voluptas.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia totam ex, laborum sed optio itaque corporis, facere fugit maxime magnam temporibus incidunt quibusdam consequuntur provident iste esse. Ratione, voluptas.
                </p>
              </div>
            </section>
          </aside>
          <aside className="min-w-96 h-full">
            <section className="w-full flex-col gap-7">
              <div className="">
                <Button className="w-full">Attend This Event</Button>
              </div>
              <div className="flex flex-col">
                <div className="p-2 rounded-sm border flex">
                  <div className="flex flex-col items-start">
                    <h5 className="text-sm text-muted-foreground">General Tickets</h5>
                    <p className="text-xs px-2 py-1 5 rounded-full mt-2 bg-secondary">Free</p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}