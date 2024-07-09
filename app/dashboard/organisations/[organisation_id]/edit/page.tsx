import BodyContent from "@/app/dashboard/(components)/body-content";
import BodyHeader from "@/app/dashboard/(components)/body-header";
import { Button } from "@/components/ui/button";
import { organisations, OrgType } from "@/lib/constants";
import { QueryProps } from "@/lib/types";
import { findItem } from "@/lib/utils";

export default async function OrganisationEdit({ params }: QueryProps) {
  const organisationID = params.organisation_id;
  const data = findItem(organisationID, organisations) as OrgType;

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">Edit Organisation</h2>
      </BodyHeader>
      <BodyContent>
        <DemoContainer header="General" />
        <DemoContainer header="Danger" hasSave={false} />
      </BodyContent>
      
    </>
  );
}

const DemoContainer = ({header, hasSave = true}: {header: string, hasSave?: boolean}) => (
  <div className="w-full h-64 rounded-lg border flex flex-col justify-between mb-7">
      <div className="w-full flex_center justify-start h-12 p-3 border-b">
          <h4 className="font-medium text-base">{header}</h4>
      </div>
      {hasSave && 
          (<div className="w-full flex_center justify-end h-12 p-3 border-t">
              <Button size='xs'>Save</Button>
          </div>)
      }
  </div>
)