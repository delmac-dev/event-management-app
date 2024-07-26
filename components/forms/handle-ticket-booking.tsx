import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form, FormControl, FormFieldContextProvider, FormItem, FormLabel, FormMessage } from "../ui/form";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, TicketCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { useBookTicket, useGetAuthProfile, useGetBookableTickets } from "@/lib/query-hooks";
import SpinnerIcon from "../icons/spinner-icon";
import { Switch } from "../ui/switch";
import { FetchedAttendeeProps, FetchedBookableTicketProps } from "@/lib/types";

const FormSchema = z.object({
    event_id: z.string().min(1, "Must include the event"),
    user_id: z.any(),
    ticket_id: z.string().min(1, "Must include the ticket"),
    full_name: z.string().min(1, "Must include your full name"),
    email: z.string().email("Must be an email"),
});

export type HandleTicketBooking = z.infer<typeof FormSchema>;

type TabProps = "tickets"| "details" | "success";
type CustomTabContentProps = {
    title?: string,
    tabName: TabProps,
    onNext?: () => void,
    onPrevious?: () => void,
    nextLabel?: string,
    previousLabel?: string,
    submit?: boolean,
    tabEnd?: boolean,
    className?: string,
    children: React.ReactNode,
    isLoading?: boolean
}

export default function HandleTicketBookingForm({eventID}:{eventID: string}) {
    const [ createdAttendee, setCreatedAttendee ] = useState<FetchedAttendeeProps|null>(null)
    const { data: profile, isLoading: authLoading } = useGetAuthProfile();
    const { data: bookableTickets, isLoading } = useGetBookableTickets(eventID);
    const { mutate: bookTicket, isError, isSuccess, isPending, error, data} = useBookTicket();

    const [tab, setTab] = useState<TabProps>("tickets");
    const form = useForm<HandleTicketBooking>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            event_id: eventID,
            ticket_id: '',
            user_id: profile?.id || '',
            full_name: '',
            email: '',
        }
    });

    const {trigger, handleSubmit, formState: { isSubmitting, isDirty }} = form;

    function onSubmit(data: HandleTicketBooking) {
        bookTicket({attendeeData: data})
    };

    const moveTo = async (tab:TabProps, fields?:any, isPrev=false) => {
        const result = !isPrev ? await trigger(fields) : true;
        
        if(!result) 
            return;
        
        setTab(tab);
    }

    useEffect(() => {
        if (isError) {
            toast.error("Error occurred booking your ticket");
        };

        if (isSuccess) {
            toast.success("Ticket booked successfully");
            setTab("success");
            setCreatedAttendee(data);
        }

    }, [isError, isSuccess]);

    useEffect(() => {
        console.log({createdAttendee});
        
    }, [createdAttendee]);

    if(isLoading || authLoading) {
        return (
            <div className="w-full py-14 flex_center">
                <SpinnerIcon className="size-10 text-secondary-foreground" />
            </div>
        )
    }

    return (
        <Form {...form}>
            <Tabs value={tab} onValueChange={(value) => setTab(value as TabProps)} asChild>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col")}>
                    <CustomTabContent 
                        title="Select Your Prefered Ticket"
                        tabName="tickets" 
                        onNext={() => moveTo('details', ["ticket_id"])}
                        className="flex-1 flex_center"
                    >
                        <TicketRadioGroup name="ticket_id" tickets={bookableTickets || []} />
                    </CustomTabContent>
                    <CustomTabContent 
                        title="Enter Your Details"
                        tabName="details"  
                        onPrevious={() => moveTo('tickets', null, true)} 
                        submit 
                        isLoading = {!isDirty || isSubmitting || isPending}
                        nextLabel="Complete Attendance"
                        className="flex-1 flex_center flex-col space-y-7"
                    >
                        <UserSwitchInput name="user_id" label="Link my account?" userID={profile?.id || null} disabled={!profile} />
                        <TicketDetailInput name="full_name" label="Full Name" placeHolder="Enter your full name" />
                        <TicketDetailInput name="email" label="Email" placeHolder="Enter your email address" />
                    </CustomTabContent>
                    <CustomTabContent 
                        tabName="success" 
                        tabEnd
                        className="flex flex-col justify-between"
                    >
                        <div className="w-full py-2 flex_center flex-col">
                            <TicketCheck strokeWidth={1} className="size-32 text-muted-foreground" />
                        </div>
                        <div className="w-full flex-1 py-5 space-y-4">
                            <h2 className="mx-auto max-w-prose text-2xl font-semibold text-foreground text-center">Congratulations !!</h2>
                            <p className="text-xl font-medium mx-auto w-full text-center">{createdAttendee?.full_name}</p>
                            <p className="text-lg font-normal text-muted-foreground text-center">You are attending this event</p>
                        </div>
                        <div className="w-full pt-4 flex_center">
                            <Button>print your ticket</Button>
                        </div>
                    </CustomTabContent>
                </form>
            </Tabs>
        </Form>
    )
}

function CustomTabContent(props: CustomTabContentProps) {
    const {
        isLoading = false,
        title,
        tabName,
        tabEnd = false,
        submit = false,
        onNext = () => {},
        onPrevious,
        nextLabel = "Next",
        previousLabel = "Previous",
        className,
        children
    } = props

    return (
        <TabsContent value={tabName} className="w-full flex-1 flex-col gap-2 m-0 hidden data-[state=active]:flex">
            <div className="flex-1 flex flex-col">
                <div className={cn("hidden w-full py-5", title && "block")}>
                    <h4 className="text-xl md:text-2xl text-center">{title}</h4>
                </div>
                <div className={cn("w-full py-2 space-y-4 flex-1", className)}>
                    {children}
                </div>
            </div>
            {!tabEnd && (
                <div className="w-full pt-4 flex flex-row-reverse justify-between">
                    <Button type={submit? "submit" : "button" } onClick={onNext} disabled={isLoading}>
                        {(submit && isLoading) && (<SpinnerIcon className="size-8 text-primary-foreground" />)}
                        {nextLabel}
                        {!submit && (<ArrowRight className="ml-2 size-4" />)}
                    </Button>
                    {onPrevious && (
                        <Button type="button" onClick={onPrevious}>
                            <ArrowLeft className="mr-2 size-4" />
                            {previousLabel}
                        </Button>
                    )}
                </div>
            )}
        </TabsContent>
    )
}

function TicketRadioGroup({name, tickets}: {name: string, tickets: FetchedBookableTicketProps[]}) {
    const { field } = useController({name});

    return (
        <FormFieldContextProvider name={name}>
            <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="w-full flex_center flex-col space-y-4"
                >  
                    {tickets.map(({id, name, price, ticket_type, total_tickets, available_tickets}, _id) => (
                        <FormItem key={_id} className="w-full max-w-96 space-y-0 p-3 rounded-lg border-2 border-transparent has-[:checked]:border-primary">
                            <FormLabel 
                                className={cn("w-full h-full flex_center font-normal capitalize cursor-pointer px-6",
                                    "relative isolate w-full h-24 bg-primary",
                                    "flex"
                                )}
                            >
                                <FormControl>
                                    <RadioGroupItem value={id} className="absolute top-1 left-1 border-muted-foreground" />
                                </FormControl>
                                <div className="flex-1 h-full flex_center flex-col items-start gap-1 pl-6">
                                    <h2 className="text-primary-foreground text-xl font-bold">{name}</h2>
                                    <p className="text-secondary text-base font-medium">
                                        {available_tickets} of {total_tickets} left
                                    </p>
                                </div>
                                <div className="h-full w-20 border-l border-dashed pl-1 flex_center flex-col gap-2">
                                    <h4 className="text-lg font-semibold text-primary-foreground">GH {price}</h4>
                                    <p className="text-xs px-3 py-1 rounded-full bg-muted text-foreground font-medium">
                                        {ticket_type}
                                    </p>
                                </div>
                                <span className="size-10 -left-5 rounded-full bg-secondary absolute block top-1/2 -translate-y-1/2 " />
                                <span className="size-10 -right-5 rounded-full bg-secondary absolute block top-1/2 -translate-y-1/2 " />
                            </FormLabel>
                        </FormItem>
                    ))}
                </RadioGroup>
            </FormControl>
        </FormFieldContextProvider>
    )
};

function TicketDetailInput(props:{name: string, label: string, placeHolder: string}) {
    const {name, label, placeHolder} = props;
    const { field } = useController({name});

    return (
        <FormFieldContextProvider name={name}>
            <FormItem className="w-full max-w-screen-sm space-y-2.5">
                <FormLabel className="font-normal text-base md:text-lg">{label}</FormLabel>
                <FormControl>
                    <Input { ...field } placeholder={placeHolder} className="w-full h-12 md:h-14 md:text-base bg-secondary border border-primary"/>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormFieldContextProvider>
    )
}

function UserSwitchInput(props:{name: string, label: string, disabled: boolean, userID: string | null}) {
    const { name, label, disabled = false, userID } = props;
    const { field } = useController({name});

    return (
        <FormFieldContextProvider name={name}>
            <FormItem className="w-full max-w-screen-sm flex justify-between items-center px-4 py-2 rounded-md border border-primary">
                <FormLabel className="text-sm font-medium text-secondary-foreground"> {label} </FormLabel>
                <FormControl>
                    <Switch 
                        checked={field.value === userID}
                        onCheckedChange={(checked) => field.onChange(checked ? userID : '')}
                        disabled={disabled} 
                        className="bg-primary"
                    />
                </FormControl>
            </FormItem>
        </FormFieldContextProvider>
    )
}