import { _dashboardOrg, _dashboardOrgs } from "@/lib/routes";
import Breadcrumbs from "../(components)/breadcrumbs";
import { BreadcrumbProps, QueryProps } from "@/lib/types";
import { organisations } from "@/lib/constants";
import Link from "next/link";
import { NewOrganisationModal } from "../(forms)/new-organisation";

const content:BreadcrumbProps[] = [
  { name: "Organisations" }
];

export default async function DashboardOrganisations({ searchParams }: QueryProps) {
  const isOrgFormOpen = searchParams.new as unknown as boolean;

  return (
    <>
      <Breadcrumbs content={content} />
      <section className="section flex items-center justify-between">
        <p className="text-2xl font-semibold">Organisations</p>
        <NewOrganisationModal isOpen={isOrgFormOpen} />
      </section>
      <section className="section">
        <p className="text-sm">Filter</p>
      </section>
      <section className="section gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {organisations.map((org, _id) => (
          <div key={_id} className="w-full bg-blue-500 h-16 rounded-sm p-2.5">
            <Link href={_dashboardOrg(org.id)} className="block w-full text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
              {org.name}
            </Link>
            {/* some more details and edit and delete and show buttons */}
          </div>
        ))}
      </section>
    </>
  );
}