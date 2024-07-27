import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";
import { NumberInput, RadioGroupInput, SwitchInput, TextInput } from "../common/custom-form-fields";
import { Button } from "../ui/button";
import { AVAILABILITY_OPTIONS, TICKET_TYPE_OPTIONS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { useModifyEventTicket, useSetEventTicket } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { FetchedTicketsProps } from "@/lib/types";

const FormSchema = z.object({
    event_id: z.string(),
    name: z.string(),
    availability: z.string(),
    ticket_code_prefix: z.union([
        z.string().length(0),
        z.string().length(3)
    ]),
    total_tickets: z.number(),
    ticket_type: z.string(),
    price: z.string(),
    is_active: z.boolean(),
});

export type HandleTicket = z.infer<typeof FormSchema>;
export type HandleTicketFormProps = {
    closeHandler: () => void,
    eventID: string,
    ticket?: FetchedTicketsProps,
    className?: string
}

export default function HandleTicketForm(props:HandleTicketFormProps) {
    const {eventID, ticket, className, closeHandler} = props;

    const { mutate: setEventTicket, isError: isSetError, isSuccess: isSetSuccess, isPending: isSetPending } = useSetEventTicket(eventID);
    const { mutate: modifyEventTicket, isError: isModifyError, isSuccess: isModifySuccess, isPending: isModifyPending} = useModifyEventTicket(eventID);

    // get total attendee from the event with the eventID
    const defaultValues = {
        event_id: eventID,
        name: ticket?.name || '',
        availability: ticket?.availability || 'available',
        ticket_code_prefix: ticket?.ticket_code_prefix || '',
        total_tickets: ticket?.total_tickets || 25,
        ticket_type: ticket?.ticket_type || 'free',
        price: ticket?.price || '0',
        is_active: ticket?.is_active || true,
    }

    const form = useForm<HandleTicket>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultValues
    });

    const {handleSubmit, reset, formState: { isDirty, isSubmitting }} = form;

    function onSubmit(data: HandleTicket) {
        ticket ? 
            modifyEventTicket({ticketData: data, id: ticket.id}):
            setEventTicket({ ticketData: data });
    };

    useEffect(() => {
        if (isSetError) {
            toast.error("Error occurred adding a ticket");
        };

        if (isSetSuccess) {
            toast.success("Ticket added successfully");
            closeHandler();
        }

        if (isModifyError) {
            toast.error("Error occurred editting a ticket");
        };

        if (isModifySuccess) {
            toast.success("Ticket editted successfully");
            closeHandler();
        }

    }, [isSetError, isSetSuccess, isModifyError, isModifySuccess]);

    useEffect(() => {
        if (ticket) reset(defaultValues);
    }, [ticket, reset]);

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                <div className="relative z-0 flex-1 space-y-4 overflow-auto p-4">
                    <TextInput name="name" label="Ticket Name" placeHolder="Enter the ticket name" />
                    <RadioGroupInput name="availability" label="Availability" options={AVAILABILITY_OPTIONS} />
                    <TextInput name="ticket_code_prefix" label="Ticket Code Prefix" placeHolder="Enter ticket code prefix" />
                    <NumberInput name="total_tickets" label="Total Tickets" />
                    <RadioGroupInput name="ticket_type" label="Ticket Type" disabled options={TICKET_TYPE_OPTIONS} />
                    <NumberInput name="price" label="Price" placeHolder="25" disabled={form.getValues('ticket_type') === 'free'} />
                    <SwitchInput name="is_active" label="Active Status" />
                </div>
                <div className="sticky bottom-0 right-0 z-50 w-full p-4 bg-background flex gap-3 justify-end">
                    <Button size='xs' variant='secondary' type='button' disabled={isSubmitting || isSetPending || isModifyPending} onClick={closeHandler}>Cancel</Button>
                    <Button size='xs' disabled={!isDirty || isSubmitting || isSetPending || isModifyPending}>
                        {   
                            (isSubmitting || isSetPending || isModifyPending ) && 
                            (<SpinnerIcon className="size-8 text-primary-foreground" />)
                        }
                        {ticket ? "Edit Ticket" : "Add Ticket"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}