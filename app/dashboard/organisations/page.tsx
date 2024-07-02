import { _dashboardOrg, _dashboardOrgs } from "@/lib/routes";
import Breadcrumbs from "../(components)/breadcrumbs";
import { BreadcrumbProps, PanelProps } from "@/lib/types";

const content:BreadcrumbProps[] = [
  { name: "Orginsations" }
];

const panel:PanelProps[] = [
  { name: "Home", link: _dashboardOrgs},
  { name: "Organisation", link: _dashboardOrgs},
  { name: "Members", link: _dashboardOrgs},
  { name: "Roles", link: _dashboardOrgs},
]

export default async function DashboardOrganisations() {

  return (
    <>
      <Breadcrumbs panel={panel} content={content} />
      <section className="w-full max-w-8xl py-2 px-4">
        <p className="text-2xl font-semibold">Organisations</p>
      </section>
      <section className="w-full max-w-8xl py-2 px-4">
        <p className="text-sm">Filter</p>
      </section>
    </>
  );
}