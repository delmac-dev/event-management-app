import { LinksProp, StarterHeader, StarterLink, StarterProps } from "@/components/starter";
import { _events, _home, _join, _login, _organisations, _profile, _tickets } from "@/lib/routes";

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

const authLink:LinksProp[] = [
  {name: "login", link: _login},
  {name: "join", link: _join},
]

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <StarterLink links={authLink} isPrimary />
      <StarterHeader {...data} />
      { children }
    </>
  );
}