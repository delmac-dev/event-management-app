"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { cn, timeToDate } from "@/lib/utils";
import { Button } from "../ui/button";
import React, { useEffect } from "react";
import { DateInput, ImageInput, NumberInput, RadioGroupInput, SelectInput, TextareaInput, TextInput, TimeInput } from "@/components/common/custom-form-fields";
import { ACCEPTED_IMAGE_TYPES, EVENT_TYPE_OPTIONS, EVENT_CATEGORIES, MAX_FILE_SIZE, SCHOOLS, TIME_REGEX } from "@/lib/constants";
import { useGetUserOrgSelect, useSetEvent } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { uploadFile } from "@/lib/supabase/upload-file";

const today = new Date();
today.setHours(0, 0, 0, 0);

const FormSchema = z.object({
    organisation_id: z.string().min(1, "An organisation must be created"),
    name: z.string().min(1),
    headline: z.string().min(1),
    capacity: z.number().min(25, "Must be a number greater than or equal to 25 "),
    event_type: z.string().min(1),
    category: z.string().min(1),
    tags: z.string().min(1),
    start_at: z.string().refine((value) => TIME_REGEX.test(value), "Invalid time format (hh:mm AM/PM)"),
    end_at: z.string().refine((value) => TIME_REGEX.test(value), "Invalid time format (hh:mm AM/PM)"),
    location: z.object({
        school: z.string().min(1),
        name: z.string().min(1),
        description: z.string().min(1)
    }),
    event_date: z.string()
                .refine(value => !isNaN(Date.parse(value)), "Invalid date format (YYYY-MM-DD)")
                .refine((value) => {
                    const date = new Date(value)
                    date.setHours(0, 0, 0, 0);
                    return date > today;
                }),
    banner: z.any()
            .refine((file) => {
            if (file.size === 0 || file.name === undefined) return false;
            else return true;
            }, "Please update or add new image.")
            .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),".jpg, .jpeg, .png and .webp files are accepted.")
            .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
            .or(z.string().min(1, "field can't be an empty string"))
}).refine((data) => data.start_at !== data.end_at,  { message: "Start and end times can't be the same", path: ["end_at"] })
.refine((data) => timeToDate(data.start_at) <= timeToDate(data.end_at),  { message: "Start time must be less than end time", path: ["end_at"] }) ;

export type NewEvent = z.infer<typeof FormSchema>;
export type NewEventFormProps = {
    closeHandler: () => void,
    organisationID?: string,
    className?: string
}

export default function NewEventForm({closeHandler, organisationID, className}:NewEventFormProps) {
    const { data: selectOrganisations, isLoading } = useGetUserOrgSelect();
    const { mutate: setEvent, isError, isSuccess, isPending, error} = useSetEvent();
    
    const defaultValues =  {
        organisation_id: organisationID as string,
        name: '',
        headline: '',
        capacity: 25,
        event_type: '',
        category: '',
        tags: '',
        event_date: new Date().toISOString().split('T')[0],
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

    const {handleSubmit, formState: { isSubmitting, isDirty }} = form;

    async function onSubmit(data: NewEvent) {
        let banner = data.banner;

        if (banner instanceof File) 
            banner = await uploadFile(banner, 'event.banners', data.name);

        const plainData = {...data, banner: banner };
        setEvent({ eventData: plainData});
    };

    useEffect(() => {
        if (isError) {
            toast.error("Error occurred creating organisation");
            console.log(error);
            
        };

        if (isSuccess) {
            toast.success("Organisation created successfully");
            closeHandler();
        }

    }, [isError, isSuccess]);

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
                    <SelectInput name="category" label="Category" placeHolder="Select a category" list={EVENT_CATEGORIES} />
                    <NumberInput name="capacity" label="Capacity" placeHolder="Total Capacity" min={25} showError />
                    <TextInput name="tags" label="Tags ( #cool, #free, #awesome )" placeHolder="Tags Associated with your event" />
                    <DateInput name="event_date" label="Event Date" showError />
                    <TimeInput name="start_at" label="Starting Time" showError />
                    <TimeInput name="end_at" label="Ending Time" showError />
                    <SelectInput name="location.school" label="School" placeHolder="Campus event is taking place" list={SCHOOLS}/>
                    <TextInput name="location.name" label="Location (ie. kumaplay auditorium)" placeHolder="Location of the event" />
                    <TextareaInput name="location.description" label="Location Guide (ie. around engineering campus)" placeHolder="Help Attendees find event" />
                    <ImageInput name="banner" label="Banner" />
                </div>
                <div  className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={!isDirty || isSubmitting || isPending}>
                        {(isSubmitting || isPending) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                        Create Event
                    </Button>
                </div>
            </form>
        </Form>
    )
};