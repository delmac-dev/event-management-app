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
import { DateInput, ImageInput, ImageListInput, NumberInput, RadioGroupInput, SelectInput, TextareaInput, TextInput } from "@/components/common/custom-form-fields";
import { eventCategories, schools } from "@/lib/constants";

const FormSchema = z.object({
    organisation_id: z.string().min(1),
    name: z.string().min(1),
    headline: z.string().min(1),
    capacity: z.string().min(1),
    event_type: z.string().min(1),
    category: z.string().min(1),
    tags: z.string().min(1),
    event_date: z.date(),
    start_at: z.string().min(1),
    end_at: z.string().min(1),
    location: z.object({
        school: z.string().min(1),
        name: z.string().min(1),
        description: z.string().min(1)
    }),
    banner: z.instanceof(File).refine(file => file.type.startsWith('image/'))
            .or(z.string().min(1, "File cant be empty")).nullable()
});

export type NewEvent = z.infer<typeof FormSchema>;
export type NewEventFormProps = {
    closeHandler: () => void,
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

export default function NewEventForm({closeHandler, organisation, className}:NewEventFormProps) {
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
            event_date: new Date(),
            start_at: '',
            end_at: '',
            location: {
                school: '',
                name: '',
                description: ''
            },
            banner: null
        }
    });

    const {trigger, handleSubmit} = form;
    const dummyOrgList = [
        { label: "ACES", value: "9897967-90878-85667-786868"},
    ]
    const eventTypeOptions = ["public", "private"];
    const eventCategoryList = eventCategories.map(item => ({
        label: item.charAt(0).toUpperCase() + item.slice(1),
        value: item
    }));
    const schoolList = schools.map((item) => ({label: item, value: item}));

    function onSubmit(data: NewEvent) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });

        closeHandler();
    };

    const moveTo = async (tab:TabProps, fields?:any, isPrev=false) => {
        const result = !isPrev ? await trigger(fields) : true;
        
        if(!result) 
            return;
        
        setTab(tab);
    }

    // if organisation just pass organisation as select option and selected as default else
    // fetch organisations where the user_id has permission to create event and pass to select input

    return (
        <Form {...form}>
            <Tabs value={tab} onValueChange={(value) => setTab(value as TabProps)} asChild>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex flex-col", className)}>
                    <CustomTabContent tabName="general" onNext={() => moveTo('about', ["organisation_id", "name", "headline", "banner"])}>
                        <SelectInput name="organisation_id" label="Organisation" placeHolder="Select an organisation" list={dummyOrgList} />
                        <TextInput name="name" label="Name" placeHolder="What's the name of your event" />
                        <TextInput name="headline" label="Headline" placeHolder="Enter a memorable headline" />
                        <ImageInput name="banner" label="Banner" />
                    </CustomTabContent>
                    <CustomTabContent tabName="about" onPrevious={() => moveTo('general', null, true)} onNext={() => moveTo('schedule', ["event_type", "category", "capacity", "tags"])}>
                        <RadioGroupInput name="event_type" label="Event Type" options={eventTypeOptions} />
                        <SelectInput name="category" label="Category" placeHolder="Select a category" list={eventCategoryList} />
                        <NumberInput name="capacity" label="Capacity" placeHolder="Total Capacity" />
                        <TextInput name="tags" label="Tags ( #cool, #free, #awesome )" placeHolder="Tags Associated with your event" />
                    </CustomTabContent>
                    <CustomTabContent tabName="schedule" onPrevious={() => moveTo('about', null, true)} submit nextLabel="Create Event">
                        <DateInput name="event_date" label="Event Date" placeHolder="When is the event occuring" />
                        <div className="flex items-end gap-1.5">
                            <div className="flex-1 order-1">
                                <TextInput name="start_at" label="Starting Time" placeHolder="When is the event starting" />
                            </div>
                            <div className="flex-1 order-3">
                                <TextInput name="end_at" label="Ending Time" placeHolder="When is the event ending" />
                            </div>
                            <ArrowRight className="size-5 text-muted-foreground mb-2 order-2" />
                        </div>
                        <SelectInput name="location.school" label="School" placeHolder="Campus event is taking place" list={schoolList}/>
                        <TextInput name="location.name" label="Location (ie. kumaplay auditorium)" placeHolder="Location of the event" />
                        <TextareaInput name="location.description" label="Location Guide (ie. around engineering campus)" placeHolder="Help Attendees find event" />
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
            <div className="space-y-4 flex-1">
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