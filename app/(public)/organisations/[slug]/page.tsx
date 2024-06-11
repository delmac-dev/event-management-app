import { QueryProps } from "@/lib/types";

export default async function Organisation({ params }: QueryProps) {
  const slug = params.slug;

  return (
    <div className="">
      {slug} page
    </div>
  );
}