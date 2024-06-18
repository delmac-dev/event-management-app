import { Button } from "@/components/ui/button";
import Footer from "../(components)/footer";
import Header from "../(components)/header";
import { ArrowRight } from "lucide-react";

export default async function Index() {

  return (
    <>
      <Header />
      <section className="w-full flex flex-col items-center justify-start py-24 px-2.5">
        <h1 className="text-neutral-800 text-wrap text-6xl font-black tracking-tight max-w-4xl  text-center leading-snug">
          Event Ticketing & Management Made Easy
        </h1>
        <p className="text-xl font-midium mt-7 max-w-3xl text-center">
          Manage and attend campus events with ease. Create, promote, and ticket your events in one place
        </p>
        <Button size="sm" className="group mt-7">
          Try CampusEvents Now 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </section>
      <section>features section</section>
      <section>why use us section</section>
      <section>faq section</section>
      <section>try us out section</section>
      <Footer />
    </>
  );
}