import { QueryProps } from "@/lib/types";

export default async function ProfileNotifications({ params }: QueryProps) {
  const ProfileID = params.profile_id;

  return (
    <div className="">
      profile notifications page
    </div>
  );
}