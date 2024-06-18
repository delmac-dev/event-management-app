import { QueryProps } from "@/lib/types";
import Header from "../../(components)/header";
import Footer from "../../(components)/footer";

export default async function Profile({ params }: QueryProps) {
    const profileID = params.profile_id;

    return (
        <>
            <Header />
            <section>public profile of {profileID} page</section>
            <Footer />
        </>
    );
}