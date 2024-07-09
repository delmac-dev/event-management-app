import { ArchiveX } from "lucide-react";
import BodyContent from "../../(components)/body-content";
import BodyHeader from "../../(components)/body-header";

export default async function ProfileNotifications() {

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">My Notifications</h2>
      </BodyHeader>
      <BodyContent>
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Notifications Yet
        </div>
      </BodyContent>
    </>
  );
}