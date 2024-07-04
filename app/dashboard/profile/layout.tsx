import { PanelProps } from "@/lib/types";
import Breadcrumbs from "../(components)/breadcrumbs";
import Panel from "../(components)/panel";
import { _dashboardNotifications, _dashboardProfile, _dashboardProfileEdit, _dashboardSettings } from "@/lib/routes";

interface LayoutProps {
  children: React.ReactNode,
  params: {[key: string]: string}
} 

export default function Layout({children}:LayoutProps) {
  
  const panel:PanelProps[] = [
    { name: "profile", link: _dashboardProfile, active: true },
    { name: "edit", link: _dashboardProfileEdit, active: true },
    { name: "notifications", link: _dashboardNotifications, active: false },
    { name: "settings", link: _dashboardSettings, active: false },
  ]

  return (
    <>
      <Breadcrumbs panel={panel} />
      <div className="section p-0 flex-1 flex">
        <aside className="hidden lg:flex w-64 min-h-[100vh-96px]">
          <Panel panel={panel} />
        </aside>
        <aside className="min-w-0 flex-1 h-full px-2 pb-14">
          { children }
        </aside>
      </div>
    </>
  );
}