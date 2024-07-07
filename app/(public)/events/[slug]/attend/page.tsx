import { QueryProps } from "@/lib/types";

export default async function EventJoin({ params }: QueryProps) {
    const slug = params.slug;

    return (
        <main className="w-full min-h-screen flex_center">
            join {slug} event page
        </main>
    );
}