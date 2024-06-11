import { StarterHeader, StarterProps } from "@/components/starter";
import { _join, _login } from "@/lib/routes";

const data: StarterProps = {
  title: "Auth Links",
  description: "Links for all auth neccessay pages",
  links: [
    {name: "login", link: _login},
    {name: "join", link: _join},
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