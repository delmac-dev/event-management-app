import { Button } from "@/components/ui/button";
import BodyHeader from "../../(components)/body-header";
import BodyContent from "../../(components)/body-content";

export default async function DashboardSettings() {

  return (
    <>
      <BodyHeader>
        <h2 className="text-xl font-medium">My Settings</h2>
      </BodyHeader>
      <BodyContent>
        <DemoContainer header="Profile" />
        <DemoContainer header="Notifications" />
        <DemoContainer header="Personalisation" />
        <DemoContainer header="Privacy" />
        <DemoContainer header="Others" />
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