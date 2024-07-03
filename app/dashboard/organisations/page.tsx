import { _dashboardOrg, _dashboardOrgs } from "@/lib/routes";
import Breadcrumbs from "../(components)/breadcrumbs";
import { BreadcrumbProps } from "@/lib/types";
import { organisations } from "@/lib/constants";

const content:BreadcrumbProps[] = [
  { name: "Organisations" }
];

export default async function DashboardOrganisations() {

  return (
    <>
      <Breadcrumbs content={content} />
      <section className="w-full max-w-7xl mx-auto py-2 px-4">
        <p className="text-2xl font-semibold">Organisations</p>
      </section>
      <section className="w-full max-w-7xl mx-auto py-2 px-4">
        <p className="text-sm">Filter</p>
      </section>
      <section className="w-full max-w-7xl mx-auto py-2 px-4 gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {organisations.map((org, _id) => (
          <div key={_id} className="w-full bg-blue-500 h-16 rounded-sm">
            {/* some more details and edit and delete and show buttons */}
          </div>
        ))}
      </section>
    </>
  );
}