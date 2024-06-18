import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import Footer from "../../(components)/footer";

export default async function Organisation({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <>
      <Header />
      <section>{slug} organisation page</section>
      <Footer />
    </>
  );
}