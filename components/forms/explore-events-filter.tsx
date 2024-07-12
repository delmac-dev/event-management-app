import { zodResolver } from "@hookform/resolvers/zod";
import { useController, UseControllerProps, useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form, FormControl, FormFieldContextProvider, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Check, Search } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { categories as categoryList } from "@/lib/constants";
import { Button } from "../ui/button";
import { CheckListInput, SliderRangeInput, TextInput } from "@/components/common/custom-form-fields";

const FormSchema = z.object({
    search: z.string(),
    ticketPrice: z.tuple([z.number(), z.number()]),
    categories: z.array(z.string()),
});

export type ExploreEventsFilter = z.infer<typeof FormSchema>;

export default function ExploreEventsFilterForm({className}:{className?: string}) {
    const form = useForm<ExploreEventsFilter>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search: '',
            ticketPrice: [0, 10000],
            categories: [],
        },
    });

    const {handleSubmit} = form;

    function onSubmit(data: ExploreEventsFilter) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full space-y-8", className)}>
                <TextInput name="search" placeHolder="Search" icon={Search} />
                <SliderRangeInput name="ticketPrice" label="Ticket Price" max={1000} />
                <CheckListInput name="categories" label="Categories" list={categoryList.slice(0,10)} />
                <ActionButtons />
            </form>
        </Form>
    )
};

const ActionButtons = () => {
    const { reset, formState: { isDirty }} = useFormContext();
    return (
        <div className="mt-7 flex items-center justify-around gap-3 bg-background">
            <Button type="button" variant='outline' size="xs" disabled={!isDirty} onClick={() => reset()} className="w-full">Reset All</Button>
            <Button type="submit" size="xs" disabled={!isDirty} className="w-full">Apply</Button>
        </div>
    )    
}