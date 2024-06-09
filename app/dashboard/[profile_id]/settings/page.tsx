import { QueryProps } from "@/lib/types";

export default async function DashboardSettings({ params }: QueryProps) {
  const profileID = params.profile_id;

  return (
    <div className="">
      dashboard settings page
    </div>
  );
}