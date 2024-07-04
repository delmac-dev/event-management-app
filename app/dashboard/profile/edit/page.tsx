import { Button } from "@/components/ui/button";

export default async function ProfileEdit() {

  return (
    <>
      <section className="section_body">
        <h2 className="font-semibold text-2xl">Edit Profile</h2>
      </section>
      <DemoContainer header="General" />
      <DemoContainer header="About" />
      <DemoContainer header="Banner" />
      <DemoContainer header="Socials" />
      <DemoContainer header="Others" />
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