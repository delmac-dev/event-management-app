import Header from "../(components)/header";
import { _event } from "@/lib/routes";
import EventsFilter from "../(components)/events-filter";
import EventsDate from "../(components)/events-date";
import EventsHeader from "../(components)/events-header";
import EevntsContainer from "../(components)/events-container";

export default async function Events() {
  return (
    <>
      <Header />
      <main className="main_container events_page_h ">
        <div className="sub_container flex min-h-full px-0">
          <aside className="sticky h-[calc(100vh-56px)] p-4 top-14 left-0 flex-1 border-r hidden lg:flex justify-end">
            <EventsFilter />
          </aside>
          <section className="w-full md:max-w-xl">
            <EventsHeader />
            <EevntsContainer />
          </section>
          <aside className="sticky h-[calc(100vh-56px)] p-4 top-14 left-0 min-w-20 flex-1 hidden border-l sm:flex justify-start">
            <EventsDate />
          </aside>
        </div>
      </main>
    </>
  );
}