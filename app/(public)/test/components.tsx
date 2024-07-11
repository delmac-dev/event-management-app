import React from "react";
import { useFormContext } from "react-hook-form";
import { TestFormType } from "./page";

type ComponentType = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const TicketSelection = ({ setStep }:ComponentType) => {
  const { register, formState: { errors }, trigger } = useFormContext<TestFormType>();

  const handleNext = async () => {
    const isValid = await trigger("ticket");
    if (isValid) {
      setStep(2);
    }
  };

  return (
    <div>
      <h2>Select Ticket</h2>
      <select {...register("ticket")} className="mt-1 block w-full">
        <option value="">Select your ticket</option>
        <option value="general">General Admission</option>
        <option value="vip">VIP</option>
      </select>
      {errors.ticket && <p className="text-red-500">{errors.ticket.message}</p>}
      <button type="button" onClick={handleNext} className="mt-4 btn btn-primary">
        Next
      </button>
    </div>
  );
};

export const UserDetails = ({ setStep }:ComponentType) => {
    const { register, formState: { errors }, trigger } = useFormContext<TestFormType>();
  
    const handleNext = async () => {
      const isValid = await trigger(["name", "email"]);
      if (isValid) {
        setStep(3);
      }
    };
  
    return (
      <div>
        <h2>User Details</h2>
        <div>
          <label>Name</label>
          <input {...register("name")} className="mt-1 block w-full" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} className="mt-1 block w-full" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <button type="button" onClick={() => setStep(1)} className="mt-4 btn btn-secondary">
          Back
        </button>
        <button type="button" onClick={handleNext} className="mt-4 btn btn-primary">
          Next
        </button>
      </div>
    );
  };

export const TermsConditions = ({ setStep }: ComponentType) => {
    const { register, formState: { errors }, trigger } = useFormContext<TestFormType>();
  
    const handleNext = async () => {
      const isValid = await trigger("acceptTerms");
      if (isValid) {
        setStep(4);
      }
    };
  
    return (
      <div>
        <h2>Terms and Conditions</h2>
        <div>
          <label>
            <input type="checkbox" {...register("acceptTerms")} /> I accept the terms and conditions
          </label>
          {errors.acceptTerms && <p className="text-red-500">{errors.acceptTerms.message}</p>}
        </div>
        <button type="button" onClick={() => setStep(2)} className="mt-4 btn btn-secondary">
          Back
        </button>
        <button type="button" onClick={handleNext} className="mt-4 btn btn-primary">
          Finish
        </button>
      </div>
    );
  };

export const Confirmation = () => (
    <div>
      <h2>Congrats! Ticket Selected</h2>
      <p>Your ticket has been successfully selected. We look forward to seeing you at the event!</p>
    </div>
  );