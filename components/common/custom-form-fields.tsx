import { cn } from "@/lib/utils";
import { FormControl, FormDescription, FormFieldContextProvider, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useController } from "react-hook-form";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Check, UploadCloud } from "lucide-react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useRef } from "react";
import Image from "next/image";

type CommonProps = {
    name: string,
    label?: string,
    description?: string,
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
                    <Input {...field} placeholder={placeHolder} className={cn(IconComponent && "pl-8")}/>
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
        description, 
        showError, 
        placeHolder="Select Something"
    } = props;

    const wrapperProps = {name, label, description, showError};
    const { field } = useController({name});

    return (
        <CustomFieldWrapper {...wrapperProps}>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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

export const ImageInput = (props: ImageInputProps) => {
    const {
        name, 
        label, 
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

export const DigitInput = () => {};

export const TimeInput = () => {};

export const DateInput = () => {};

export const SwitchInput = () => {};

export const RadioGroupInput = () => {};

export const ComboInput = () => {};

export const RadioSelectInput = () => {};

export const SliderInput = () => {};

export const ImageListInput = () => {};