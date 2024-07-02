import { _dashboardOrg, _dashboardOrgs } from "@/lib/routes";
import Breadcrumbs from "../(components)/breadcrumbs";
import { BreadcrumbProps } from "@/lib/types";

const content:BreadcrumbProps[] = [
  { name: "Orginsations" }
];

export default async function DashboardOrganisations() {

  return (
    <>
      <Breadcrumbs content={content} />
      <section className="w-full max-w-8xl py-2 px-4">
        <p className="text-2xl font-semibold">Organisations</p>
      </section>
      <section className="w-full max-w-8xl py-2 px-4">
        <p className="text-sm">Filter</p>
      </section>
      <section className="">
        
      </section>
    </>
  );
}