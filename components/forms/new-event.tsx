import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { ComboInput, TextareaInput, TextInput } from "@/components/common/custom-form-fields";

const FormSchema = z.object({
    organisation_id: z.string(),
    name: z.string(),
    headline: z.string(),
    capacity: z.string(),
    event_type: z.string(),
    category: z.string(),
    tags: z.string(),
    event_date: z.string(),
    start_at: z.string(),
    end_at: z.string(),
    location: z.object({
        school: z.string(),
        name: z.string(),
        description: z.string()
    }),
    banner: z.string()
});

export type NewEvent = z.infer<typeof FormSchema>;
export type NewEventFormProps = {
    onSubmitClick?: () => void,
    organisation?: any,
    className?: string
}
type TabProps = "general"| "about" | "schedule"| "banner";
type CustomTabContentProps = {
    tabName: TabProps,
    onNext?: () => void,
    onPrevious?: () => void,
    nextLabel?: string,
    previousLabel?: string,
    submit?: boolean,
    children: React.ReactNode
}

export default function NewEventForm({onSubmitClick, organisation, className}:NewEventFormProps) {
    const [tab, setTab] = useState<TabProps>("general");
    const form = useForm<NewEvent>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            organisation_id: organisation?.id ?? '' as string,
            name: '',
            headline: '',
            capacity: '',
            event_type: '',
            category: '',
            tags: '',
            event_date: '',
            start_at: '',
            end_at: '',
            location: {
                school: '',
                name: '',
                description: ''
            },
            banner: ''
        }
    });

    const {handleSubmit} = form;
    const dummyOrgList = [
        {id: "9897967-90878-85667-786868", label: "ACES"},
        {id: "9897967-90878-85667-786868", label: "ACES"},
        {id: "9897967-90878-85667-786868", label: "ACES"},
    ]

    function onSubmit(data: NewEvent) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });

        if(onSubmitClick) onSubmitClick();
    };

    const moveTo = (tab:TabProps) => {
        setTab(tab)
    }

    // if organisation just pass organisation as select option and selected as default else
    // fetch organisations where the user_id has permission to create event and pass to select input

    return (
        <Form {...form}>
            <Tabs value={tab} onValueChange={(value) => setTab(value as TabProps)} asChild>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex flex-col", className)}>
                    <CustomTabContent tabName="general" onNext={() => moveTo('about')}>
                        <ComboInput name="organisation_id" label="Organisation" placeHolder="Select an organisation" list={dummyOrgList} />
                        <TextInput name="name" label="Name" placeHolder="What's the name of your event" />
                        <TextInput name="headline" label="Headline" placeHolder="Enter a memorable headline" />
                    </CustomTabContent>
                    <CustomTabContent tabName="about" onNext={() => moveTo('schedule')} onPrevious={() => moveTo('general')}>
                        <TextInput name="event_type" label="Event Type" placeHolder="Is the event private or public" />
                        <TextInput name="category" label="Category" placeHolder="Category your event belongs in" />
                        <TextInput name="capacity" label="Capacity" placeHolder="Total Capacity" />
                        <TextInput name="tags" label="Tags" placeHolder="Tags Associated with your event" />
                    </CustomTabContent>
                    <CustomTabContent tabName="schedule" onNext={() => moveTo('banner')} onPrevious={() => moveTo('about')}>
                        <TextInput name="event_date" label="Event Date" placeHolder="When is the event occuring" />
                        <div className="flex items-end gap-1.5">
                            <div className="flex-1 order-1">
                                <TextInput name="start_at" label="Starting Time" placeHolder="When is the event starting" />
                            </div>
                            <div className="flex-1 order-3">
                                <TextInput name="end_at" label="Ending Time" placeHolder="When is the event ending" />
                            </div>
                            <ArrowRight className="size-5 text-muted-foreground mb-2 order-2" />
                        </div>
                        <TextInput name="location.school" label="School" placeHolder="Campus event is taking place" />
                        <TextInput name="location.name" label="Location" placeHolder="Location of the event" />
                        <TextareaInput name="location.description" label="Location Guide" placeHolder="Help Attendees find event" />
                    </CustomTabContent>
                    <CustomTabContent tabName="banner" nextLabel="Create Event" onPrevious={() => moveTo('about')} submit>
                        <TextInput name="banner" label="Banner" placeHolder="A captivating banner" />
                    </CustomTabContent>
                </form>
            </Tabs>
        </Form>
    )
};

const CustomTabContent = (props: CustomTabContentProps) => {
    const {
        tabName,
        submit = false,
        onNext = () => {},
        onPrevious,
        nextLabel = "Next",
        previousLabel = "Previous",
        children
    } = props

    return (
        <TabsContent value={tabName} className="w-full flex-1 flex-col gap-2 m-0 hidden data-[state=active]:flex">
            <div className="space-y-3 flex-1">
                {children}
            </div>
            <div className="w-full pt-4 flex flex-row-reverse justify-between">
                <Button type={submit? "submit" : "button" } onClick={onNext} size="xs">
                    {nextLabel}
                    {!submit && (<ArrowRight className="ml-2 size-4" />)}
                </Button>
                {onPrevious && (
                    <Button type="button" onClick={onPrevious} size="xs">
                        <ArrowLeft className="mr-2 size-4" />
                        {previousLabel}
                    </Button>
                )}
            </div>
        </TabsContent>
)
}