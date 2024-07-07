"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { Check, Search } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormContext } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { categories as categoryList } from "@/lib/constants"

const FormSchema = z.object({
    search: z.string(),
    ticketPrice: z.tuple([z.number(), z.number()]),
    categories: z.array(z.string()),
});

export default function EventsFilter () {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search: '',
            ticketPrice: [0, 10000],
            categories: [],
        },
    });

    const { control, handleSubmit, watch } = form;
    const [ search, ticketPrice, categories ] = watch(["search", "ticketPrice", "categories"]);
    const isApplyDisabled = !(search || (categories.length > 0) || (ticketPrice[0] !== 0 || ticketPrice[1] !== 10000));

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="relative overflow-y-auto w-full max-w-80 rounded-md h-full flex flex-col">
                <div className="mb-4">
                    <h4 className="text-lg font-medium">Filters & Sort</h4>
                </div>
                <div className="flex-1">
                    <FormItem className="relative space-y-0">
                        <FormField
                            control={control}
                            name="search"
                            render={({ field }) => (
                                <>
                                    <Input {...field} placeholder="Search" className="pl-8"/>
                                    <Search className="absolute top-1/2 left-1.5 -translate-y-1/2 w-5 h-5 text-muted-foreground space-y-1" />
                                </>
                            )}
                        />
                    </FormItem>
                    <FilterItem header="Ticket Price" >
                        <FormField
                            control={control}
                            name="ticketPrice"
                            render={({ field }) => (
                                <Slider
                                    value={[field.value[0], field.value[1]]} 
                                    max={10000} 
                                    step={1} 
                                    minStepsBetweenThumbs={100}
                                    onValueChange={(val) => field.onChange(val)}
                                />
                            )}
                        />
                    </FilterItem>
                    <FilterItem header="Category" className="flex flex-wrap gap-2 justify-start">
                        {categoryList.map((item) => <CategoryItem key={item} item={item}/>)}
                    </FilterItem>
                </div>
                <div className="sticky left-0 bottom-0 mt-4 px-1 py-2.5 flex items-center justify-around gap-3 bg-background">
                    <Button variant='outline' className="w-full">Reset All</Button>
                    <Button type="submit" disabled={isApplyDisabled} className="w-full">Apply</Button>
                </div>
            </form>
        </Form>
    )
}

const FilterItem = ({header, className, children}: {header: string, className?: string, children: React.ReactNode}) => (
    <FormItem className="mt-8 space-y-0">
        <FormLabel className="block text-sm font-medium text-foreground mb-4">
            {header}
        </FormLabel>
        <div className={cn("p-1.5", className)}>
            {children}
        </div>
    </FormItem>
);

const CategoryItem = ({item}: {item: string}) => {
    const { control } = useFormContext<z.infer<typeof FormSchema>>();

    return (
        <FormField
            control={control}
            name="categories"
            render={({ field }) => (
                <FormItem key={item} className="group flex_center px-2 py-1.5 rounded-full bg-secondary space-y-0 border border-transparent has-[:checked]:border-border cursor-pointer transition-all">
                    <Checkbox
                        id={item}
                        className="hidden"
                        checked={field.value?.includes(item)}
                        onCheckedChange={(checked: boolean) => ( checked ? 
                            field.onChange([...field.value, item]) :
                            field.onChange( field.value?.filter( (value) => value !== item))
                        )}
                    />
                    <FormLabel htmlFor={item} className="text-xs text-secondary-foreground capitalize cursor-pointer">
                        {item}
                    </FormLabel>
                    <Check className="size-3 hidden ml-1.5 group-has-[:checked]:block"/>
                </FormItem>
            )}
        />
    )
}