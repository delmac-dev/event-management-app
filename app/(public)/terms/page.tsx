"use client";

import * as React from "react";
import Header from "../(components)/header";
import Footer from "../(components)/footer";
import { TERMS, PRIVACY_POLICY } from "@/lib/constants";

type ContainerDataProps = {
  label: string, 
  description?: string, 
  contents?: string[]
}
type LegalContainerProps = {
  id: string,
  header: string,
  subHeader?: string,
  data: ContainerDataProps[]
}

export default function TermsAndConditions() {

  return (
    <>
      <Header />
      <main className="main_container flex-1 px-4">
        <LegalContainer
          id="team-section"
          header="Terms and conditions"
          subHeader="Welcome to Connect! By accessing or using our application, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully."
          data = {TERMS}
        />
        <LegalContainer
          id="privacy-policy"
          header="Privacy Policy"
          data = {PRIVACY_POLICY}
        />
      </main>
      <Footer />
    </>
  );
}

const LegalContainer = ({ id, header, subHeader, data}:LegalContainerProps) => (
  <section id={id} className="sub_container pt-14 pb-7 space-y-6">
    <div className="w-full space-y-4 text-left md:text-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">{header}</h2>
      {subHeader && (<p className="w-full text-sm max-w-prose">{subHeader}</p>)}
    </div>
    <div className="w-full space-y-4">
      {data.map((item, _id) => (<TermCard key={_id} {...item} />))}
    </div>
  </section>
)

const TermCard = ({label, description, contents}: {label: string, description?: string, contents?: string[]}) => (
  <div className="w-full space-y-2">
    <div className="w-full space-y-1">
      <h1 className="text-base text-foreground text-left font-medium">{label}</h1>
      <p className="text-base text-secondary-foregorund font-normal">{description}</p>
    </div>
    <ul className="w-fulll space-y-2">
      {contents?.map((item, _id)=> (
        <li key={_id} className="text-sm font-normal text-secondary-foreground list-disc">{item}</li>
      ))}
    </ul>
  </div>
)