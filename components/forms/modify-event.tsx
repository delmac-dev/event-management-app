"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn, listToString, timeToDate } from "@/lib/utils";
import { DateInput, ImageInput, NumberInput, RadioGroupInput, SelectInput, SwitchInput, TextareaInput, TextInput, TimeInput } from "../common/custom-form-fields";
import { ACCEPTED_IMAGE_TYPES, EVENT_TYPE_OPTIONS, EVENT_CATEGORIES, MAX_FILE_SIZE, SCHOOLS, TIME_REGEX } from "@/lib/constants";
import { Button } from "../ui/button";
import { useGetEventByID, useModifyEvent } from "@/lib/query-hooks";
import { _dashboardEvents } from "@/lib/routes";
import { uploadFile } from "@/lib/supabase/upload-file";
import { deleteEvent } from "@/lib/queries";
import { useEffect } from "react";
import SpinnerIcon from "../icons/spinner-icon";
import DeleteHandler from "@/app/dashboard/(components)/delete-handler";

const today = new Date();
today.setHours(0, 0, 0, 0);

const ModifyEventFormSchema = z.object({
    organisation_id: z.string(),
    organiser: z.string(),
    name: z.string().min(1, "An organisation must be created"),
    headline: z.string(),
    capacity: z.number().min(25, "Must be a number greater than or equal to 25 "),
    event_type: z.string().min(1),
    category: z.string().min(1),
    tags: z.string().min(1),
    is_published: z.boolean(),
    about: z.string().optional(),
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
    })).nullable(),
    agenda: z.array(z.object({
        time: z.string(),
        title: z.string(),
        description: z.string()
    })).nullable(),
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
    .or(z.string().min(1, "Field can't be an empty string"))
}).refine((data) => data.start_at !== data.end_at,  { message: "Start and end times can't be the same", path: ["end_at"] })
.refine((data) => timeToDate(data.start_at) <= timeToDate(data.end_at),  { message: "Start time must be less than end time", path: ["end_at"] }) ;

export type ModifyEvent = z.infer<typeof ModifyEventFormSchema>;

export function ModifyEventForm({eventID, className}:{eventID:string, className?: string}) {
    const { data: event, isLoading } = useGetEventByID(eventID);
    const { mutate: modifyEvent, isError, isSuccess, isPending } = useModifyEvent(eventID);

    const defaultValues = {
        organisation_id: event?.organisation_id.value || "",
        organiser: event?.organiser.value || "",
        name: event?.name || "",
        headline: event?.headline || "" ,
        category: event?.category || "",
        capacity: event?.capacity || 25,
        tags: listToString(event?.tags || []),
        event_type: event?.event_type || "",
        banner: event?.banner || "",
        is_published: event?.is_published || false,
        about: event?.about || "",
        event_date: event?.event_date || "",
        start_at: event?.start_at || "",
        end_at: event?.end_at || "",
        location: event?.location || { school: '', name: '', description: '' },
        faq: event?.faq || [],
        agenda: event?.agenda || []
    }

    const deleteHandlerData = {
        title: "Delete this event",
        description: "All attendee and other data associated with this event will also be deleted along side the event",
        buttonText: "Delete Event",
        toastMessage: "Event deleted successfully",
        redirectTo: _dashboardEvents,
      }

    const form = useForm<ModifyEvent>({
        resolver: zodResolver(ModifyEventFormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isSubmitting, isDirty }} = form;

    async function onSubmit(data: ModifyEvent) {
        let banner = data.banner;

        if (banner instanceof File) 
            banner = await uploadFile(banner, 'event.banners', data.name);

        const plainData = {...data, banner: banner};

        modifyEvent({ eventData: plainData, id: eventID});
    };

    const handleEventDelete = async () => {
        await deleteEvent({id: eventID});
    }

    useEffect(() => {
        if (event) {
            reset(defaultValues);
        }
    }, [event, reset]);

    useEffect(() => {
        if (isError) toast.error("Error occurred editing event");

        if (isSuccess) toast.success("Event edited successfully");

    }, [isError, isSuccess]);

    if(isLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full p-4 space-y-4 rounded-sm border", className)}>
                    <SwitchInput name="is_published" label="Publish this event" disabled={event?.total_tickets === 0} />
                    <SelectInput name="organisation_id" label="Organisation" defaultvalue={event?.organisation_id.value} list={[event?.organisation_id as { value: string; label: string; }]} disabled />
                    <SelectInput name="organiser" label="Organiser" defaultvalue={event?.organiser.value} list={[event?.organiser as { value: string; label: string; }]} disabled />
                    <TextInput name="name" label="Name" />
                    <TextInput name="headline" label="Headline" />
                    <SelectInput name="category" label="Category" placeHolder="Select a category" defaultvalue={event?.category} list={EVENT_CATEGORIES} />
                    <NumberInput name="capacity" label="Capacity" placeHolder="Total Capacity" min={event?.used_capacity || 25} showError />
                    <TextInput name="tags" label="Tags ( #cool, #free, #awesome )" />
                    <RadioGroupInput name="event_type" label="Event Type" defaultValue={event?.event_type} options={EVENT_TYPE_OPTIONS} />
                    <TextareaInput name="about" label="About This Event" />
                    <DateInput name="event_date" label="Event Date" showError/>
                    <TimeInput name="start_at" label="Starting Time" showError />
                    <TimeInput name="end_at" label="Ending Time" showError />
                    <SelectInput name="location.school" label="School" defaultvalue={event?.location.school} list={SCHOOLS}/>
                    <TextInput name="location.name" label="Location (ie. kumaplay auditorium)" />
                    <TextareaInput name="location.description" label="Location Guide (ie. around engineering campus)" />
                    <ImageInput name="banner" label="Banner" />
                    {/* faq object list input */}
                    {/* agenda object list */}
                    <div className="w-full flex justify-end">
                        <Button size='xs' disabled={isSubmitting || isPending || !isDirty}>
                            {(isPending || isSubmitting) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Form>
            <DeleteHandler { ...deleteHandlerData } deleteAction={handleEventDelete} />
        </>
    )
}