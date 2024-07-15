import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form, FormControl, FormFieldContextProvider, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, TicketCheck } from "lucide-react";
import { useState } from "react";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";

const FormSchema = z.object({
    user_id: z.string(),
    ticket_id: z.string(),
    full_name: z.string(),
    email: z.string(),
});

export type HandleTicketBooking = z.infer<typeof FormSchema>;
export type HandleTicketBookingFormProps = {
    event: any,
    className?: string
}
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
    children: React.ReactNode
}

export default function HandleTicketBookingForm({className}:HandleTicketBookingFormProps) {
    const [tab, setTab] = useState<TabProps>("tickets");
    const form = useForm<HandleTicketBooking>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            ticket_id: '',
            user_id: '',
            full_name: '',
            email: '',
        }
    });

    const {trigger, handleSubmit} = form;
    // select all tickets where event.id and pass to select

    function onSubmit(data: HandleTicketBooking) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        });
        setTab("success");
    };

    const moveTo = async (tab:TabProps, fields?:any, isPrev=false) => {
        const result = !isPrev ? await trigger(fields) : true;
        
        if(!result) 
            return;
        
        setTab(tab);
    }

    return (
        <Form {...form}>
            <Tabs value={tab} onValueChange={(value) => setTab(value as TabProps)} asChild>
                <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full flex-1 flex flex-col", className)}>
                    <CustomTabContent 
                        title="Select Your Prefered Ticket"
                        tabName="tickets" 
                        onNext={() => moveTo('details', ["ticket_id"])}
                        className="flex-1 flex_center"
                    >
                        <TicketRadioGroup name="ticket_id" />
                    </CustomTabContent>
                    <CustomTabContent 
                        title="Enter Your Details"
                        tabName="details"  
                        onPrevious={() => moveTo('tickets', null, true)} 
                        submit 
                        nextLabel="Complete Attendance"
                        className="flex-1 flex_center flex-col space-y-7"
                    >
                        {/* user_id switch input */}
                        <TicketDetailInput name="full_name" label="Full Name" placeHolder="Enter your full name" />
                        <TicketDetailInput name="email" label="Email" placeHolder="Enter your email address" />
                    </CustomTabContent>
                    <CustomTabContent 
                        tabName="success" 
                        tabEnd
                        className="flex flex-col"
                    >
                        <div className="w-full py-8 flex_center flex-col">
                            <TicketCheck strokeWidth={1} className="size-32 text-muted-foreground" />
                            
                        </div>
                    </CustomTabContent>
                </form>
            </Tabs>
        </Form>
    )
}

function CustomTabContent(props: CustomTabContentProps) {
    const {
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
                <div className={cn("w-full py-2 space-y-4", className)}>
                    {children}
                </div>
            </div>
            <div className="w-full pt-4 flex flex-row-reverse justify-between">
                {!tabEnd && (
                    <Button type={submit? "submit" : "button" } onClick={onNext}>
                        {nextLabel}
                        {!submit && (<ArrowRight className="ml-2 size-4" />)}
                    </Button>
                )}
                {(!tabEnd && onPrevious) && (
                    <Button type="button" onClick={onPrevious}>
                        <ArrowLeft className="mr-2 size-4" />
                        {previousLabel}
                    </Button>
                )}
            </div>
        </TabsContent>
    )
}


function TicketRadioGroup({name}: {name: string}) {
    const { field } = useController({name});

    return (
        <FormFieldContextProvider name={name}>
            <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="w-full flex_center flex-col space-y-4"
                >  
                    {Array(2).fill("").map((item, _id) => (
                        <FormItem key={_id} className="relative w-full max-w-80 h-24 space-y-0 p-3 rounded-sm border-2 border-dashed has-[:checked]:bg-muted/20">
                            <FormControl>
                                <RadioGroupItem value={`ticket ${_id}`} className="absolute top-1 right-1 border-muted-foreground" />
                            </FormControl>
                            <FormLabel className="w-full h-full flex_center font-normal capitalize cursor-pointer">
                                Ticket {_id + 1}
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
                    <Input { ...field } placeholder={placeHolder} className="w-full h-12 md:h-14 md:text-base"/>
                </FormControl>
            </FormItem>
        </FormFieldContextProvider>
    )
}