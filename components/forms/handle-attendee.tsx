import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { RadioGroupInput, SelectInput, TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useGetEventTicketSelect, useModifyEventAttendee, useSetEventAttendee } from "@/lib/query-hooks";
import { ATTENDEE_STATUS_OPTIONS, PAYMENT_STATUS_OPTIONS } from "@/lib/constants";
import SpinnerIcon from "../icons/spinner-icon";
import { FetchedAttendeeProps } from "@/lib/types";

const FormSchema = z.object({
    event_id: z.string(),
    user_id: z.string().nullable(),
    ticket_id: z.string().min(1, "Must select a ticket"),
    full_name: z.string().min(1, "Must enter a full name"),
    email: z.string().email("Must enter an email"),
    status: z.string().min(1, "Must choose a status"),
    payment_status: z.string().min(1, "Must choose a payment status"),
});

export type HandleAttendee = z.infer<typeof FormSchema>;
export type HandleAttendeeFormProps = {
    closeHandler: ()=>void,
    eventID: string,
    attendee?: FetchedAttendeeProps,
    className?: string
}

export default function HandleAttendeeForm(props:HandleAttendeeFormProps) {
    const { closeHandler, eventID, attendee, className } = props;

    const { mutate: setEventAttendee, isError: isSetError, isSuccess: isSetSuccess, isPending: isSetPending } = useSetEventAttendee(eventID);
    const { mutate: modifyEventAttendee, isError: isModifyError, isSuccess: isModifySuccess, isPending: isModifyPending } = useModifyEventAttendee(eventID)
    const { data: selectTickets, isLoading: isSelectTicketsLoading } = useGetEventTicketSelect(eventID);

    const defaultValues = {
        event_id: eventID,
        user_id: attendee?.user_id || null,
        ticket_id: attendee?.ticket_id || '',
        full_name: attendee?.full_name || '',
        email: attendee?.email || '',
        status: attendee?.status || 'registered',
        payment_status: attendee?.payment_status || 'completed',
    }

    const form = useForm<HandleAttendee>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isDirty, isSubmitting }} = form;

    function onSubmit(data: HandleAttendee) {
        attendee ? 
            modifyEventAttendee({attendeeData: data, id: attendee.id}):
            setEventAttendee({ attendeeData: data });
    };

    useEffect(() => {
        if (isSetError) {
            toast.error("Error occurred adding a attendee");
        };

        if (isSetSuccess) {
            toast.success("Attendee added successfully");
            closeHandler();
        }

        if (isModifyError) {
            toast.error("Error occurred editting a attendee");
        };

        if (isModifySuccess) {
            toast.success("Attendee editted successfully");
            closeHandler();
        }

    }, [isSetError, isSetSuccess, isModifyError, isModifySuccess]);

    useEffect(() => {
        if (attendee) reset(defaultValues);
    }, [attendee, reset]);

    if(isSelectTicketsLoading) {
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
                    <RadioGroupInput name="status" label="Ticket Type" disabled={!attendee} options={ATTENDEE_STATUS_OPTIONS} />
                    <RadioGroupInput name="payment_status" label="Payment Status" disabled={!attendee} options={PAYMENT_STATUS_OPTIONS} />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isSetPending || isModifyPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs'  disabled={!isDirty || isSubmitting || isSetPending || isModifyPending}>
                        {   
                            (isSubmitting || isSetPending || isModifyPending ) && 
                            (<SpinnerIcon className="size-8 text-primary-foreground" />)
                        }
                        {attendee ? "Edit Attendee" : "Add Attendee"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}