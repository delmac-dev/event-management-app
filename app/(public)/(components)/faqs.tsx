import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

export default function Faqs() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-screen-md">
            {faqs.map(({ question, answer}, _id) => (
                <AccordionItem key={_id} value={ question } defaultChecked={_id === 0} >
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}