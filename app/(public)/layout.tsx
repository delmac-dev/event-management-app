import { StarterHeader, StarterProps } from "@/components/starter";
import { _events, _home, _organisations, _profile, _tickets } from "@/lib/routes";

const data: StarterProps = {
    title: "Public Links",
    description: "Links for all public pages",
    links: [
        {name: "home", link: _home},
        {name: "events", link: _events},
        {name: "organisations", link: _organisations},
        {name: "find tickets", link: _tickets},
        {name: "my profile", link: _profile("237657657rfgfgftfty")},
    ]
};

export default function Layout({children}: {children: React.ReactNode}) {
    return (
      <>
        <StarterHeader {...data} />
        { children }
      </>
    );
}