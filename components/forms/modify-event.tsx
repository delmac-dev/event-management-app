import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "../ui/form";
import { cn } from "@/lib/utils";

const GeneralFormSchema = z.object({
    name: z.string(),
    headline: z.string(),
    capacity: z.string(),
    category: z.string(),
    tags: z.string(),
    is_published: z.string()
});

const AboutFormSchema = z.object({
    about: z.string(),
});

const BannerFormSchema = z.object({
    banner: z.string(),
});

const ScheduleFormSchema = z.object({
    event_date: z.string(),
    start_at: z.string(),
    end_at: z.string(),
    location: z.object({
        country: z.string(),
        school: z.string(),
        google_location: z.string(),
        description: z.string()
    }),
});

const FaqFormSchema = z.object({
    faq: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })),
});

const AgendaFormSchema = z.object({
    agenda: z.array(z.object({
        time: z.string(),
        title: z.string(),
        description: z.string()
    })),
});

export type ModifyEventGeneral = z.infer<typeof GeneralFormSchema>;
export type ModifyEventAbout = z.infer<typeof AboutFormSchema>;
export type ModifyEventBanner = z.infer<typeof BannerFormSchema>;
export type ModifyEventSchedule = z.infer<typeof ScheduleFormSchema>;
export type ModifyEventFaq = z.infer<typeof FaqFormSchema>;
export type ModifyEventAgenda = z.infer<typeof AgendaFormSchema>;

export function ModifyEventGeneralForm({event, className}:{event:any, className?: string}) {
    const form = useForm<ModifyEventGeneral>({
        resolver: zodResolver(GeneralFormSchema),
        defaultValues: {
            name: '',
            headline: '',
            category: '',
            tags: '',
            is_published: ''
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyEventGeneral) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* name input */}
                {/* headline input */}
                {/* category select input */}
                {/* tags input */}
                {/* is_published switch input */}
                {/* submit button */}
            </form>
        </Form>
    )
}
export function ModifyEventAboutForm({event, className}:{event:any, className?: string}) {
    const form = useForm<ModifyEventAbout>({
        resolver: zodResolver(AboutFormSchema),
        defaultValues: {
            about: '',
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyEventAbout) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* about textarea */}
                {/* submit button */}
            </form>
        </Form>
    )
}
export function ModifyEventBannerForm({event, className}:{event:any, className?: string}) {
    const form = useForm<ModifyEventBanner>({
        resolver: zodResolver(BannerFormSchema),
        defaultValues: {
            banner: '',
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyEventBanner) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* banner input */}
                {/* submit button */}
            </form>
        </Form>
    )
}
export function ModifyEventScheduleForm({event, className}:{event:any, className?: string}) {
    const form = useForm<ModifyEventSchedule>({
        resolver: zodResolver(ScheduleFormSchema),
        defaultValues: {
            event_date: '',
            start_at: '',
            end_at: '',
            location: {
                country: '',
                school: '',
                google_location: '',
                description: ''
            },
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyEventSchedule) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* event_date date input */}
                {/* start_at date input */}
                {/* end_at time input */}
                {/* location.country select input of countries */}
                {/* location.school select input of schools */}
                {/* location.google_location select input of actual place location */}
                {/* location.description textarea input */}
                {/* submit button */}
            </form>
        </Form>
    )
}
export function ModifyEventFaqForm({event, className}:{event:any, className?: string}) {
    const form = useForm<ModifyEventFaq>({
        resolver: zodResolver(FaqFormSchema),
        defaultValues: {
            faq: [{
                question: '',
                answer: ''
            }],
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyEventFaq) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* faq object list input */}
                {/* submit button */}
            </form>
        </Form>
    )
}
export function ModifyEventAgendaForm({event, className}:{event:any, className?: string}) {
    const form = useForm<ModifyEventAgenda>({
        resolver: zodResolver(AgendaFormSchema),
        defaultValues: {
            agenda: [{
                time: '',
                title: '',
                description: ''
            }]
        }
    });

    const {handleSubmit} = form;

    function onSubmit(data: ModifyEventAgenda) {
        toast.success("You submitted the following values:", {
          description: JSON.stringify(data, null, 2),
          position: "top-right"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full", className)}>
                {/* agenda object list */}
                {/* submit button */}
            </form>
        </Form>
    )
}