import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { RadioGroupInput, SelectInput, TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useGetEventAttendeeByID, useGetEventTicketSelect, useSetEventAttendee } from "@/lib/query-hooks";
import { ATTENDEE_STATUS_OPTIONS, PAYMENT_STATUS_OPTIONS } from "@/lib/constants";
import SpinnerIcon from "../icons/spinner-icon";

const FormSchema = z.object({
    event_id: z.string(),
    user_id: z.string().nullable(),
    ticket_id: z.string().min(1, "Must select a ticket"),
    full_name: z.string().min(1, "Must enter a full name"),
    email: z.string().min(1, "Must enter an email"),
    status: z.string().min(1, "Must choose a status"),
    payment_status: z.string().min(1, "Must choose a payment status"),
});

export type HandleAttendee = z.infer<typeof FormSchema>;
export type HandleAttendeeFormProps = {
    closeHandler: ()=>void,
    eventID: string,
    attendeeID?: string,
    className?: string
}

export default function HandleAttendeeForm(props:HandleAttendeeFormProps) {
    const { closeHandler, eventID, attendeeID, className } = props;
    const [shouldFetch, setShouldFetch] = useState(false);

    const { data: attendee, isLoading } = shouldFetch ? useGetEventAttendeeByID(attendeeID as string, eventID) : { data: null, isLoading: false };
    const { mutate: setEventAttendee, isError, isSuccess, isPending } = useSetEventAttendee(eventID);
    const { data: selectTickets, isLoading: isSelectTicketsLoading } = useGetEventTicketSelect(eventID);

    const defaultValues = {
        event_id: eventID,
        user_id: null,
        ticket_id: '',
        full_name: '',
        email: '',
        status: 'registered',
        payment_status: 'completed',
    }

    const form = useForm<HandleAttendee>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isDirty, isSubmitting }} = form;

    function onSubmit(data: HandleAttendee) {
        setEventAttendee({ attendeeData: data });
    };

    useEffect(() => {
        if (attendeeID)
            setShouldFetch(true);
    }, [attendeeID]);

    useEffect(() => {
        if (isError) {
            toast.error("Error occurred adding a attendee");
        };

        if (isSuccess) {
            toast.success("Attendee added successfully");
            closeHandler();
        }

    }, [isError, isSuccess]);

    useEffect(() => {
        if (attendee) reset(defaultValues);
    }, [attendee, reset]);

    if(isLoading || isSelectTicketsLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 overflow-auto p-4">
                    <SelectInput name="ticket_id" label="Ticket" placeHolder="Select a ticket" list={selectTickets ?? []} />
                    <TextInput name="full_name" label="Full Name" placeHolder="Enter the attendee's full name" />
                    <TextInput name="email" label="Email" placeHolder="Enter the attendee's email" />
                    <RadioGroupInput name="status" label="Ticket Type" disabled options={ATTENDEE_STATUS_OPTIONS.slice(0,2)} />
                    <RadioGroupInput name="payment_status" label="Payment Status" disabled options={PAYMENT_STATUS_OPTIONS.slice(0,2)} />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs'  disabled={!isDirty || isSubmitting || isPending}>
                        {(isSubmitting || isPending) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                        Add Attendee
                    </Button>
                </div>
            </form>
        </Form>
    )
}