import { QueryProps } from "@/lib/types";

export default async function Profile({ params }: QueryProps) {
  const profileID = params.profile_id;

  return (
    <div className="">
      profile page
    </div>
  );
}