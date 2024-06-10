import { QueryProps } from "@/lib/types";

export default async function DashboardTickets({ params }: QueryProps) {
  const profileID = params.profile_id;

  return (
    <div className="">
      protected tickets page
    </div>
  );
}