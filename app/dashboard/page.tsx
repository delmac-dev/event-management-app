import { _dashboardOrgs } from "@/lib/routes";
import { redirect } from "next/navigation";

export default async function DashboardHome() {
    redirect(_dashboardOrgs);
}