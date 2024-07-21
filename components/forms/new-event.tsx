"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { DateInput, ImageInput, NumberInput, RadioGroupInput, SelectInput, TextareaInput, TextInput, TimeInput } from "@/components/common/custom-form-fields";
import { EVENT_TYPE_OPTIONS, eventCategoryList, schools, TIME_REGEX } from "@/lib/constants";
import { useGetUserOrgSelect } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { Input } from "../ui/input";

const today = new Date();
today.setHours(0, 0, 0, 0);

const FormSchema = z.object({
    organisation_id: z.string().min(1, "An organisation must be created"),
    name: z.string().min(1),
    headline: z.string().min(1),
    capacity: z.string().min(1),
    event_type: z.string().min(1),
    category: z.string().min(1),
    tags: z.string().min(1),
    event_date: z.date().refine((date) => date <= today),
    start_at: z.string().regex(TIME_REGEX, "Invalid time format (hh:mm AM/PM)"),
    end_at: z.string().regex(TIME_REGEX, "Invalid time format (hh:mm AM/PM)"),
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
    organisationID?: string,
    className?: string
}

export default function NewEventForm({closeHandler, organisationID, className}:NewEventFormProps) {
    const { data: selectOrganisations, isLoading } = useGetUserOrgSelect();
    
    const defaultValues =  {
        organisation_id: organisationID as string,
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

    const form = useForm<NewEvent>({
        resolver: zodResolver(FormSchema),
        defaultValues
    });

    const {handleSubmit, reset, formState: { isSubmitting }} = form;

    function onSubmit(data: NewEvent) {
        toast.success("You submitted the following values:");

        closeHandler();
    };

    // if organisation just pass organisation as select option and selected as default else
    // fetch organisations where the user_id has permission to create event and pass to select input
    if(isLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 p-4">
                    <SelectInput name="organisation_id" label="Organisation" placeHolder="Select an organisation" list={selectOrganisations ?? []} disabled={!!organisationID}/>
                    <TextInput name="name" label="Name" placeHolder="What's the name of your event" />
                    <TextInput name="headline" label="Headline" placeHolder="Enter a memorable headline" />
                    <RadioGroupInput name="event_type" label="Event Type" options={EVENT_TYPE_OPTIONS} />
                    <SelectInput name="category" label="Category" placeHolder="Select a category" list={eventCategoryList} />
                    <NumberInput name="capacity" label="Capacity" placeHolder="Total Capacity" />
                    <TextInput name="tags" label="Tags ( #cool, #free, #awesome )" placeHolder="Tags Associated with your event" />
                    <DateInput name="event_date" label="Event Date" />
                    <TimeInput name="start_at" label="Starting Time" />
                    <TimeInput name="end_at" label="Ending Time" />
                    <SelectInput name="location.school" label="School" placeHolder="Campus event is taking place" list={schools}/>
                    <TextInput name="location.name" label="Location (ie. kumaplay auditorium)" placeHolder="Location of the event" />
                    <TextareaInput name="location.description" label="Location Guide (ie. around engineering campus)" placeHolder="Help Attendees find event" />
                    <ImageInput name="banner" label="Banner" />
                </div>
                <div  className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={isSubmitting}>Create Event</Button>
                </div>
            </form>
        </Form>
    )
};