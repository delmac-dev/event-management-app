import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { Button } from "@/components/ui/button";
import { QueryProps } from "@/lib/types";
import { ArchiveX } from "lucide-react";

export default async function EventTickets({ params }: QueryProps) {
  const eventID = params.event_id;
  
  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Event Tickets</h2>
      </BodyHeader>
      <BodyContent>
        <div className="w-full h-64 rounded-lg border border-dashed border-spacing-4 flex_center flex-col gap-3 text-sm font-medium text-secondary-foreground">
          <ArchiveX />
          No Tickets Yet
          <Button size='xs'>Add a ticket</Button>
        </div>
      </BodyContent>
    </>
  );
}