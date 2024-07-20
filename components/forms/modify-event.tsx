"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { DateInput, SelectInput, TextareaInput, TextInput } from "../common/custom-form-fields";
import { eventCategoryList, schools } from "@/lib/constants";
import { Button } from "../ui/button";

const ModifyEventFormSchema = z.object({
    organisation_id: z.string(),
    name: z.string(),
    headline: z.string(),
    capacity: z.string(),
    category: z.string(),
    tags: z.string(),
    banner: z.string(),
    is_published: z.string(),
    about: z.string(),
    event_date: z.string(),
    start_at: z.string(),
    end_at: z.string(),
    location: z.object({
        school: z.string().min(1),
        name: z.string().min(1),
        description: z.string().min(1)
    }),
    faq: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })),
    agenda: z.array(z.object({
        time: z.string(),
        title: z.string(),
        description: z.string()
    })),
});

export type ModifyEvent = z.infer<typeof ModifyEventFormSchema>;

export function ModifyEventForm({eventID, className}:{eventID:string, className?: string}) {
    const form = useForm<ModifyEvent>({
        resolver: zodResolver(ModifyEventFormSchema),
        defaultValues: {
            organisation_id: '',
            name: '',
            headline: '',
            category: '',
            tags: '',
            banner: '',
            is_published: '',
            about: '',
            event_date: '',
            start_at: '',
            end_at: '',
            location: {
                school: '',
                name: '',
                description: ''
            },
            faq: [{
                question: '',
                answer: ''
            }],
            agenda: [{
                time: '',
                title: '',
                description: ''
            }]
        }
    });

    const {handleSubmit, formState: { isSubmitting }} = form;

    function onSubmit(data: ModifyEvent) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full p-4 space-y-4 rounded-sm border", className)}>
                <TextInput name="organisation_id" label="Organisation" disabled />
                <TextInput name="name" label="Name" />
                <TextInput name="headline" label="Headline" />
                <SelectInput name="category" label="Category" placeHolder="Select a category" list={eventCategoryList} />
                <TextInput name="tags" label="Tags ( #cool, #free, #awesome )" />
                {/* banner input */}
                {/* is_published switch input */}
                <TextareaInput name="about" label="About This Event" />
                <DateInput name="event_date" label="Event Date" />
                <TextInput name="start_at" label="Starting Time" />
                <TextInput name="end_at" label="Ending Time" />
                <SelectInput name="location.school" label="School" list={schools}/>
                <TextInput name="location.name" label="Location (ie. kumaplay auditorium)" />
                <TextareaInput name="location.description" label="Location Guide (ie. around engineering campus)" />
                {/* faq object list input */}
                {/* agenda object list */}
                <div className="w-full flex justify-end">
                    <Button size='xs' disabled={isSubmitting}>Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}