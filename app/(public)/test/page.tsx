"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Confirmation, TermsConditions, TicketSelection, UserDetails } from "./components";
import { Form } from "@/components/ui/form";

const schema = z.object({
  ticket: z.string().min(1, "Ticket selection is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type TestFormType = z.infer<typeof schema>;

const Attend = () => {
  const methods = useForm<TestFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      ticket: "",
      name: "",
      email: "",
      acceptTerms: false,
    },
  });

  const [step, setStep] = useState(1);
  const onSubmit = (data: TestFormType) => {
    console.log(data);
    setStep(4);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 && <TicketSelection setStep={setStep} />}
        {step === 2 && <UserDetails setStep={setStep} />}
        {step === 3 && <TermsConditions setStep={setStep} />}
        {step === 4 && <Confirmation />}
      </form>
    </Form>
  );
};

export default Attend;
