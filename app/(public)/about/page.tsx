import Header from "../(components)/header";
import { FAQS, TEAM } from "@/lib/constants";
import { CircleHelp } from "lucide-react";
import Footer from "../(components)/footer";

export default function Page() {
    return (
        <>  
            <Header />
            <main className="main_container flex-1 px-4">
                <section id="about-section" className="main_container py-16 px-4">
                    <div className="sub_container">
                        <div className="mb-12 w-full text-center lg:mb-[70px] flex flex-col items-center">
                            <span className="mb-2 block text-lg font-semibold text-muted-foreground">About</span>
                            <h2 className="mb-3 text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                About this project
                            </h2>
                        </div>
                    </div>
                </section>
                <section id="team-section" className="main_container py-16 px-4">
                    <div className="sub_container">
                        <div className="mb-12 w-full text-center lg:mb-[70px] flex flex-col items-center">
                            <span className="mb-2 block text-lg font-semibold text-muted-foreground">Team</span>
                            <h2 className="mb-3 text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                Meet the team
                            </h2>
                        </div>
                        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {TEAM.map((item, _id)=> (
                                <TeamCard key={_id} {...item} />
                            ))}
                        </div>
                    </div>
                </section>
                <section id="faq-section" className="main_container py-16 px-4">
                    <div className="sub_container">
                        <div className="mb-12 w-full text-center lg:mb-[70px] flex flex-col items-center">
                            <span className="mb-2 block text-lg font-semibold text-muted-foreground">FAQ</span>
                            <h2 className="mb-3 text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                Any Questions? Look Here
                            </h2>
                        </div>
                        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {FAQS.map(({ question, answer }, _id) => (
                                <div key={_id} className="mb-12 flex lg:mb-[70px]">
                                    <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                                        <CircleHelp className="size-9 text-primary-foreground" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="mb-6 text-xl font-semibold text-secondary-foreground sm:text-2xl lg:text-xl xl:text-2xl">
                                            {question}
                                        </h3>
                                        <p className="text-base text-normal text-muted-foreground">
                                            {answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

const TeamCard = ({name, role}: any) => (
    <div className="w-full aspect-video flex items-start flex-col gap-4 border bg-secondary/60 backdrop-blur-md p-4 rounded-md">
        <div className="size-16 bg-secondary rounded-sm" />
        <div className="flex-1 space-y-2">
            <h3 className="text-lg text-secondary-foreground font-medium">{name}</h3>
            <p className="text-base text-muted-foreground">{role}</p>
        </div>
    </div>
)