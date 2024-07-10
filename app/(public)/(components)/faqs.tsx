import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

export default function Faqs() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-screen-md">
            {faqs.map(({ question, answer}, _id) => (
                <AccordionItem key={_id} value={ question } defaultChecked={_id === 0} >
                    <AccordionTrigger className="text-sm font-medium">{question}</AccordionTrigger>
                    <AccordionContent className="text-sm font-normal text-muted-foreground leading-relaxed max-w-prose">{answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}