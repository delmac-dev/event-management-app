import Faqs from "../(components)/faqs";
import AboutProject from '../(components)/about-project';
import { Badge } from "@/components/ui/badge";

const people = [
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
        name: 'Koomson Arnon Kobina Acquah',
        role: 'Co-Founder / CEO',
        githubUrl: 'https://github.com/koomsonarnon',
        twitterUrl: 'https://twitter.com/koomsonarnon',
    },
]

export default function Page() {
    return (
        <div>
            <AboutProject />
            <hr className="mx-24"></hr>
            <div className="bg-white py-24 sm:py-32" id="team-section">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We're a passionate group of developers and designers who joined forces to tackle challenges in the event management space.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <Badge variant="secondary" className="bg-red-100 text-red-400">{person.role}</Badge>
                                        <div className="flex space-x-3 mt-2">
                                            <a href={person.githubUrl} target="_blank" className="text-gray-500 hover:text-gray-900">
                                                <span className="sr-only">GitHub</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.175c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.832 2.809 1.303 3.495.997.107-.774.418-1.303.762-1.603-2.665-.304-5.467-1.333-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.303 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.293-1.553 3.3-1.23 3.3-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.824 1.102.824 2.22v3.293c0 .32.193.694.8.576C20.565 21.798 24 17.3 24 12 24 5.373 18.627 0 12 0z"/>
                                                </svg>
                                            </a>
                                            <a href={person.twitterUrl} target="_blank" className="text-gray-500 hover:text-gray-900">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557a9.945 9.945 0 0 1-2.828.775 4.932 4.932 0 0 0 2.168-2.724 9.875 9.875 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.37 4.482 13.944 13.944 0 0 1-10.14-5.14 4.822 4.822 0 0 0 1.524 6.574 4.903 4.903 0 0 1-2.23-.616c-.054 2.04 1.415 3.977 3.544 4.404a4.936 4.936 0 0 1-2.224.085 4.922 4.922 0 0 0 4.598 3.417 9.867 9.867 0 0 1-6.1 2.105c-.397 0-.79-.023-1.175-.068a13.936 13.936 0 0 0 7.557 2.212c9.054 0 14-7.504 14-14 0-.213-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="mx-24"></hr>
            <section id="faq-section" className="main_container py-16">
                <div className="sub_container">
                    <h1 className="font-semibold text-2xl text-center text-green-700">FAQs</h1>
                    <div className="w-full mt-7 flex_center p-0 m-0">
                        <Faqs />
                    </div>
                </div>
            </section>
        </div>
    )
}
