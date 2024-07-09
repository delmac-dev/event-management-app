import { _dashboardProfileEdit } from "@/lib/routes";
import { redirect } from "next/navigation";

export default async function Profile() {

  redirect(_dashboardProfileEdit);
}