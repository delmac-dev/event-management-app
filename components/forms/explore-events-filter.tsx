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
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                <EventSearch name="search" />
                <TicketPrice name="ticketPrice" />
                <EventCategories /> 
                <ActionButtons />
            </form>
        </Form>
    )
};

const FilterItem = ({header, className, children}: {header: string, className?: string, children: React.ReactNode}) => (
    <FormItem className="mt-8 space-y-0">
        <FormLabel className="block text-sm font-normal text-secondary-foreground mb-4">
            {header}
        </FormLabel>
        <div className={cn(className)}>
            {children}
        </div>
    </FormItem>
);

const TicketPrice = (props: UseControllerProps<any>) => {
    const { field } = useController(props);

    return (
        <FormFieldContextProvider name={props.name}>
            <FilterItem header="Ticket Price" >
                <FormControl>
                    <Slider
                        value={field.value} 
                        max={10000} 
                        step={1} 
                        minStepsBetweenThumbs={100}
                        onValueChange={field.onChange}
                    />
                </FormControl>
            </FilterItem>
        </FormFieldContextProvider>
    )
}

const EventSearch = (props: UseControllerProps<any>) => {
    const { field } = useController(props);

    return (
        <FormFieldContextProvider name={props.name}>
            <FormItem className="relative space-y-0 z-0">
                <FormControl>
                    <Input {...field} placeholder="Search" className="pl-8"/>
                </FormControl>
                <Search className="absolute top-1/2 left-1.5 -translate-y-1/2 w-5 h-5 text-muted-foreground space-y-1" />
            </FormItem>
        </FormFieldContextProvider>
    )
}

const EventCategories = () => (
    <FilterItem header="Category" className="flex flex-wrap gap-2 justify-start">
        {categoryList.slice(0,10).map((item) => <CategoryItem key={item} name="categories" item={item}/>)}
    </FilterItem>
)

const CategoryItem = (props: UseControllerProps<any> & {item: string}) => {
    const { item } = props;
    const { field } = useController(props);

    return (
        <FormFieldContextProvider name={props.name}>
            <FormItem key={item} className="group flex_center px-2 py-1.5 rounded-full bg-secondary/80 space-y-0 border border-transparent has-[:checked]:border-border cursor-pointer transition-all">
                <FormControl>
                    <Checkbox
                        id={item}
                        className="hidden"
                        checked={field.value?.includes(item)}
                        onCheckedChange={(checked: boolean) => ( checked ? 
                            field.onChange([...field.value, item]) :
                            field.onChange( field.value.filter( (value:any) => value !== item))
                        )}
                    />
                </FormControl>
                <FormLabel htmlFor={item} className="text-xs font-normal text-secondary-foreground capitalize cursor-pointer">
                    {item}
                </FormLabel>
                <Check className="size-3 hidden ml-1.5 group-has-[:checked]:block"/>
            </FormItem>
        </FormFieldContextProvider>
    )
}

const ActionButtons = () => {
    const { reset, formState: { isDirty }} = useFormContext();
    return (
        <div className="mt-7 flex items-center justify-around gap-3 bg-background">
            <Button type="button" variant='outline' size="xs" disabled={!isDirty} onClick={() => reset()} className="w-full">Reset All</Button>
            <Button type="submit" size="xs" disabled={!isDirty} className="w-full">Apply</Button>
        </div>
    )    
}