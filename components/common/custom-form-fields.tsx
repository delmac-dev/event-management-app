import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormFieldContextProvider, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useController } from "react-hook-form";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Check, CheckIcon, ChevronsUpDown, UploadCloud } from "lucide-react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { Textarea } from "../ui/textarea";

type CommonProps = {
    name: string,
    label?: string,
    description?: string,
    disabled?: boolean,
    showError?: boolean,
}

type CustomFieldWrapperProps = CommonProps & {
    className?: string,
    children?: React.ReactNode
}

type TextInputProps = CommonProps & {
    icon?: React.ElementType,
    placeHolder?: string
}

type SliderRangeInputProps = CommonProps & {
    max?: number,
}

type CheckListInputProps = CommonProps & {
    list: string[]
}

type SelectInputProps = CommonProps & {
    list: string[],
    placeHolder?: string
}

type ImageInputProps = CommonProps & {
}

type ComboInputProps = CommonProps & {
    list: {
        id: string,
        label: string
    }[],
    placeHolder?: string,
    searchPlaceHolder?: string,
    emptyText?: string,
    isLoading?: boolean,
}

type TextareaInputProps = CommonProps & {
    placeHolder?: string,
    cols?: number,
    rows?: number
}

type RadioGroupInputProps = CommonProps & {
    options?: string[],
    render?: () => void
}

const CustomFieldWrapper = (props:CustomFieldWrapperProps) => {
    const {name, label, className, description, showError = false, children } = props;
    return (
        <FormFieldContextProvider name={name}>
            <FormItem className={cn(className)}>
                {(label || description) &&(
                    <div>
                        {label && (<FormLabel className="text-sm font-normal text-secondary-foreground"> {label} </FormLabel>)}
                        {description && (<FormDescription> {description} </FormDescription>)}
                    </div>
                )}
                {children}
                {showError && (<FormMessage />)}
            </FormItem>
        </FormFieldContextProvider>
    )
};

export const TextInput = (props: TextInputProps) => {
    const {
        icon,
        name, 
        label, 
        disabled=false,
        description, 
        showError, 
        placeHolder="Text Here"
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});
    const IconComponent = icon;

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <div className="relative space-y-0 z-0">
                <FormControl>
                    <Input {...field} placeholder={placeHolder} disabled={disabled} className={cn(IconComponent && "pl-8")}/>
                </FormControl>
                {IconComponent && (
                    <IconComponent 
                        className={cn("w-5 h-5 text-muted-foreground space-y-1", 
                                    "absolute top-1/2 left-1.5 -translate-y-1/2")} 
                    />
                )}
            </div>
        </CustomFieldWrapper>
    )
};

export const SliderRangeInput = (props: SliderRangeInputProps) => {
    const {
        max = 10000,
        name, 
        label, 
        disabled=false,
        description, 
        showError,
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <div className="px-2 h-10 flex_center rounded-sm border">
                <FormControl>
                    <Slider
                        value={field.value} 
                        disabled={disabled}
                        max={max} 
                        step={1} 
                        minStepsBetweenThumbs={100}
                        onValueChange={field.onChange}
                    />
                </FormControl>
            </div>
        </CustomFieldWrapper>
    )
};

export const CheckListInput = (props: CheckListInputProps) => {
    const {
        list,
        name, 
        label, 
        disabled=false,
        description, 
        showError,
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <div className="flex flex-wrap gap-2 justify-start">
                {list.map((item, _id) => (
                    <CustomFieldWrapper 
                        key={_id} 
                        name={name} 
                        className="group flex_center px-2 py-1.5 rounded-full bg-secondary/80 space-y-0 border border-transparent has-[:checked]:border-border cursor-pointer transition-all"
                    >
                        <FormControl>
                            <Checkbox
                                id={item}
                                className="hidden"
                                disabled={disabled}
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked: boolean) => ( checked ? 
                                    field.onChange([...field.value, item]) :
                                    field.onChange( field.value.filter( (value:any) => value !== item))
                                )}
                            />
                        </FormControl>
                        <Label htmlFor={item} className="text-xs font-normal text-secondary-foreground capitalize cursor-pointer">
                            {item}
                        </Label>
                        <Check className="size-3 hidden ml-1.5 group-has-[:checked]:block"/>
                    </CustomFieldWrapper>
                ))}
            </div>
        </CustomFieldWrapper>
    )
};

export const SelectInput = (props: SelectInputProps) => {
    const {
        list,
        name, 
        label, 
        disabled=false,
        description, 
        showError, 
        placeHolder="Select Something"
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeHolder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {list.map((item, _id)=>(
                        <SelectItem key={_id} value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
        </CustomFieldWrapper>
    )
};

export const ComboInput = (props: ComboInputProps) => {
    const {
        list,
        isLoading=false,
        name, 
        label, 
        disabled=false,
        description, 
        showError, 
        emptyText="No Data found.",
        placeHolder="Select",
        searchPlaceHolder="Search..."

    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps} className="w-full">
            <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      disabled={disabled}
                      className={cn("w-full justify-between font-normal text-muted-foreground")}
                    >
                      {field.value? list.find((item) => item.id === field.value)?.label : placeHolder}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=" p-0">
                  <Command>
                    <CommandInput placeholder={searchPlaceHolder} className="h-9" />
                    <CommandEmpty>{emptyText}</CommandEmpty>
                    {/* <CommandGroup>
                      {list.map((item) => (
                        <CommandItem key={item.id} value={item.label} onSelect={() => field.onChange(item.id)}>
                          {item.label}
                          <CheckIcon className={cn("ml-auto h-4 w-4", item.id === field.value ? "opacity-100": "opacity-0")}/>
                        </CommandItem>
                      ))}
                    </CommandGroup> */}
                  </Command>
                </PopoverContent>
              </Popover>
        </CustomFieldWrapper>
    )
};

export const ImageInput = (props: ImageInputProps) => {
    const {
        name, 
        label, 
        disabled,
        description, 
        showError,
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field: { value, onChange, ref } } = useController({name});
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <div className="w-full max-w-screen-sm flex gap-3 items-center justify-start">
                <FormControl>
                    <input
                        type='file'
                        className="hidden"
                        ref={(e) => inputRef.current = e }
                        onChange={({ target: { files } }) =>onChange(files && files[0] ? files[0] : null)}
                    />
                </FormControl>
                <div 
                    onClick={()=>inputRef.current?.click()}
                    className={cn("relative overflow-hidden flex_center w-16 h-16 rounded-sm border border-dashed cursor-pointer",
                        !value? "bg-muted":""
                    )}>
                    {!value? 
                        (<UploadCloud className="text-muted-foreground" />) :
                        (<Image 
                            src={typeof value === 'string' ? value : URL.createObjectURL(value)} 
                            alt={label ?? "Avatar"} 
                            fill={true}
                            unoptimized
                        />)
                    }
                </div>
                <p className="text-base font-muted">Upload Image</p>
            </div>
        </CustomFieldWrapper>
    )
};

export const TextareaInput = (props: TextareaInputProps) => {
    const {
        cols=10,
        rows=7,
        name, 
        label, 
        disabled=false,
        description, 
        showError, 
        placeHolder="Text Here"
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <FormControl>
                <Textarea
                    disabled={disabled}
                    placeholder={placeHolder}
                    cols={cols}
                    rows={rows}
                    className="resize-none"
                    {...field}
                />
            </FormControl>
        </CustomFieldWrapper>
    )
};

export const RadioGroupInput = (props: RadioGroupInputProps) => {
    const {
        name, 
        label, 
        disabled=false,
        description, 
        showError, 
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <FormControl>
                <></>
            </FormControl>
        </CustomFieldWrapper>
    )
};

export const NumberInput = () => {};

export const TimeInput = () => {};

export const DateInput = () => {};

export const SwitchInput = () => {};

export const RadioSelectInput = () => {};

export const SliderInput = () => {};

export const ImageListInput = () => {};