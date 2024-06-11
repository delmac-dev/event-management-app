import { _dashboardOrgs } from "@/lib/routes";
import { QueryProps } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function DashboardHome({ params }: QueryProps) {
    redirect(_dashboardOrgs);
}