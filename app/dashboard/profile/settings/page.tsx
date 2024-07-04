import { Button } from "@/components/ui/button";

export default async function DashboardSettings() {

  return (
    <>
      <section className="section_body">
        <h2 className="font-semibold text-2xl">My Settings</h2>
      </section>
      <DemoContainer header="Profile" />
      <DemoContainer header="Notifications" />
      <DemoContainer header="Personalisation" />
      <DemoContainer header="Privacy" />
      <DemoContainer header="Others" />
      <DemoContainer header="Danger" hasSave={false} />
    </>
  );
}

const DemoContainer = ({header, hasSave = true}: {header: string, hasSave?: boolean}) => (
  <section className="section_body">
      <div className="w-full h-64 rounded-lg border flex flex-col justify-between">
          <div className="w-full flex_center justify-start h-12 p-3 border-b">
              <h4 className="font-semibold text-lg">{header}</h4>
          </div>
          {hasSave && 
              (<div className="w-full flex_center justify-end h-12 p-3 border-t">
                  <Button size='xs'>Save</Button>
              </div>)
          }
      </div>
  </section>
)