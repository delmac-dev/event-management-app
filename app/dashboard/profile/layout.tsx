import { NavigationProps } from "@/lib/types";
import { _dashboardNotifications, _dashboardProfileEdit, _dashboardSettings } from "@/lib/routes";
import BodyNavigation from "../(components)/body-navigation";

interface LayoutProps {
  children: React.ReactNode,
  params: {[key: string]: string}
} 

export default function Layout({children}:LayoutProps) {
  
  const navigationList:NavigationProps[] = [
    { name: "notifications", link: _dashboardNotifications, active: false },
    { name: "settings", link: _dashboardSettings, active: false },
    { name: "edit", link: _dashboardProfileEdit, active: true },
  ]

  return (
    <>
      <BodyNavigation navigationList={navigationList} />
        {children}
    </>
  );
}