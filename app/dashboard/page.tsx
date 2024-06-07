import { redirect } from "next/navigation";

export default async function DashboardHome() {
    redirect("/dashboard/organisations");
}