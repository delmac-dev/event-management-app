import Logo from "@/components/common/logo";
import { _dashboard, _events, _home, _organisations, _tickets } from "@/lib/routes";

const footerLinks = [
    {
        title: "General",
        links: [
            {name: "home", link: _home},
            {name: "events", link: _events},
            {name: "organisations", link: _organisations},
            {name: "my dashboard", link: _dashboard},
            {name: "find my ticket", link: _tickets},
        ]
    }
]

const Footer = () => {
  return (
    <footer className="w-full py-8 px-2 flex bg-secondary justify-center">
        <div className="">
            <div className="flex gap-2 5 items-center flex-col">
                <Logo />
                <span className="text-lg font-semibold">CampusEvents</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer