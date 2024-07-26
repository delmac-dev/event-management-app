import Header from "../(components)/header";
import { FAQS } from "@/lib/constants";
import { CircleHelp } from "lucide-react";
import Footer from "../(components)/footer";

const team = [
    {
        name: 'Edwin Elikem Draffor',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/edwinelikem',
        twitterUrl: 'https://twitter.com/edwinelikem',
    },
    {
        name: 'Tengue Delali Precious',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/tenguedelali',
        twitterUrl: 'https://twitter.com/tenguedelali',
    },
    {
        name: 'Kojo Nhyira Mante-Darkwa',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/kojonhyira',
        twitterUrl: 'https://twitter.com/kojonhyira',
    },
    {
        name: 'Bennett Kofi Okyere Aboagye',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/bennettkofi',
        twitterUrl: 'https://twitter.com/bennettkofi',
    },
    {
        name: 'Okantey Gideon Nii Okaitey',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/okanteygideon',
        twitterUrl: 'https://twitter.com/okanteygideon',
    },
    {
        name: 'Akorful Jeffery Adu Quaye',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/akorfuljeffery',
        twitterUrl: 'https://twitter.com/akorfuljeffery',
    },
    {
        name: 'Amponsah Nathaniel',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/amponsahnathaniel',
        twitterUrl: 'https://twitter.com/amponsahnathaniel',
    },
    {
        name: 'Afrim Prince Gabriel',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/afrimprince',
        twitterUrl: 'https://twitter.com/afrimprince',
    },
    {
        name: 'Danu Jeffery Selassie',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/danujeffery',
        twitterUrl: 'https://twitter.com/danujeffery',
    },
    {
        name: 'Menson John Asare',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/mensonjohn',
        twitterUrl: 'https://twitter.com/mensonjohn',
    },
    {
        name: 'Nkrumah Charles Nhyira',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/nkrumahcharles',
        twitterUrl: 'https://twitter.com/nkrumahcharles',
    },
    {
        name: 'Koomson Arnon Acquah',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/koomsonarnon',
        twitterUrl: 'https://twitter.com/koomsonarnon',
    },
]

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
                        <div className="-mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                            {team.map((item, _id)=> (
                                <div key={_id} className="w-full relative z-0 aspect-square flex_center items-end">
                                    <div className="absolute size-28 md:size-36 bg-primary left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3"></div>
                                    <div className="w-full h-1/2 bg-secondary p-3 md:p-4 flex items-end">
                                        <p className="text-sm text-muted-foreground font-medium w-full text-center">{item.name}</p>
                                    </div>
                                </div>
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