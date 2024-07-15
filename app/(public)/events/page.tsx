import Header from "../(components)/header";
import { _event } from "@/lib/routes";
import EventsFilter from "../(components)/events-filter";
import EventsHeader from "../(components)/events-header";
import EevntsContainer from "../(components)/events-container";

export default async function Events() {
  return (
    <>
      <Header />
      <main className="main_container events_page_h ">
        <div className="sub_container flex min-h-full py-7 gap-5">
          <section className="flex-1">
            <EventsHeader />
            <EevntsContainer />
          </section>
          <aside className="hidden lg:block">
            <EventsFilter />
          </aside>
        </div>
      </main>
    </>
  );
}