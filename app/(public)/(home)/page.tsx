import { Button } from "@/components/ui/button";
import Footer from "../(components)/footer";
import Header from "../(components)/header";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: null,
    feature: "Create and manage organisations with unlimited members having different roles",
  },
  {
    icon: null,
    feature: "Simply create, share and manage any private or public campus events",
  },
  {
    icon: null,
    feature: "Manage all event tickets and attendees with a user friendly dashboard",
  },
]

export default async function Index() {

  return (
    <>
      <Header />
      <section className="w-full flex flex-col items-center justify-start py-20 lg:py-24 px-4">
        <h1 className="text-accent-foreground text-wrap text-4xl md:text-5xl lg:text-6xl leading-normal md:leading-snug lg:leading-snug font-black tracking-tight max-w-4xl text-center">
          Event Ticketing & Management Made Easy
        </h1>
        <p className="md:text-xl font-midium mt-4 lg:mt-7 max-w-3xl text-center">
          Manage and attend campus events with ease. Create, promote, and ticket your events in one place
        </p>
        <Button size="sm" className="group mt-7">
          Try CampusEvents Now 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Button>
        <div className="w-full max-w-6xl rounded-lg bg-secondary aspect-video mt-7"></div>
      </section>
      <section className="w-full px-4 py-10">
        <div className="w-full max-w-8xl mx-auto">
          <h1 className="font-semibold text-3xl">Available Features</h1>
        </div>
        <div className="w-full max-w-8xl mx-auto mt-7 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({icon, feature}, _id) =>(
            <div key={_id} className="w-full border p-6 flex flex-col items-start">
              <div className="w-14 aspect-square rounded-full bg-secondary"></div>
              <p className="font-normal text-lg tracking-wide mt-4">{feature}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full px-4 py-10">
        <div className="w-full max-w-8xl mx-auto">
          <h1 className="font-semibold text-3xl">FAQ's</h1>
        </div>
        <div className="w-full max-w-8xl mx-auto">

        </div>
      </section>
      <Footer />
    </>
  );
}