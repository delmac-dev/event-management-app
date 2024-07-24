"use client";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CardDescription } from "@/components/ui/card";
import PrivacyPolicy from "../(components)/privacy-policy";
import Header from "../(components)/header";

const terms = [
  {
    label: "User Accounts",
    contents: [
      "To access certain features of the app, you may need to create an account.",
      "You are responsible for maintaining the confidentiality of your account information.",
      "You agree to provide accurate and complete information during the registration process.",
    ],
  },
  {
    label: "Event Creation and Management",
    contents: [
      "Organizations can create and manage events through the app.",
      "All event details provided must be accurate and not misleading.",
      "We reserve the right to remove or modify any event that violates these terms or any applicable laws.",
    ],
  },
  {
    label: "Ticket Booking and Attendance",
    contents: [
      "Users can book tickets for events through the app.",
      "All ticket bookings are subject to availability and the terms set by the event organizers.",
      "We are not responsible for any issues related to ticket booking, including cancellations or refunds, which are managed by the event organizers.",
    ],
  },
  {
    label: "User Conduct",
    contents: [
      "You agree not to use the app for any unlawful purpose or in any way that could harm the app or its users.",
      "Harassment, abuse, or any form of inappropriate behavior towards other users or event organizers is strictly prohibited.",
      "We reserve the right to suspend or terminate your account if you violate these terms.",
    ],
  },
  {
    label: "Content Ownership and Usage",
    contents: [
      "All content provided by users, including event details, images, and descriptions, remains the property of the respective users or organizations.",
      "By posting content on the app, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content for the purpose of operating and promoting the app.",
    ],
  },
  {
    label: "Privacy",
    contents: [
      "We respect your privacy and are committed to protecting your personal information.",
      "Our Privacy Policy outlines how we collect, use, and safeguard your data.",
    ],
  },
  {
    label: "Limitation of Liability",
    contents: [
      "We are not liable for any damages arising from your use of the app, including but not limited to direct, indirect, incidental, punitive, and consequential damages.",
      "We do not guarantee the accuracy, completeness, or reliability of any content or information provided through the app.",
    ],
  },
  {
    label: "Changes to Terms and Conditions",
    contents: [
      "We may update these Terms and Conditions from time to time.",
      "Any changes will be posted on this page, and your continued use of the app constitutes acceptance of the revised terms.",
    ],
  },
  {
    label: "Governing Law",
    contents: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Ghana.",
      "Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in the Reppublic of Ghana.",
    ],
  },
  {
    label: "Contact Us",
    contents: [
      "If you have any questions or concerns about these Terms and Conditions, please contact us at info@connectwide.com.",
    ],
  },
];

export default function TermsAndConditions() {
  const [openStates, setOpenStates] = React.useState(terms.map(() => true));

  const toggleCollapsible = (index: number) => {
    setOpenStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <Header></Header>
      <h1 className="text-center m-5 text-3xl font-semibold">
        <span className="text-red-500">CONNECT   </span> Terms of Service
      </h1>
      <div className="container mx-auto p-4 space-y-6">
        <section className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-sm ">
            Welcome to Connect! By accessing or using our application, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
          </p>
        </section>
        <section className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
          <ul className="list-disc pl-5 text-sm font-mono space-y-2">
            <li>"App" refers to Connect, the campus event management application.</li>
            <li>"We," "us," and "our" refer to the creators and administrators of Connect.</li>
            <li>"You" and "your" refer to users of the app.</li>
          </ul>
        </section>
        {terms.map((term, index) => (
          <Collapsible key={index} open={openStates[index]} onOpenChange={() => toggleCollapsible(index)} className="w-full border rounded-md shadow-sm">
            <div className="flex items-center justify-between space-x-4 px-4 py-3 bg-gray-200 rounded-t-md">
              <h4 className="text-lg font-semibold">{term.label}</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <CaretSortIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="p-4 bg-white rounded-b-md">
              {term.contents.map((content, idx) => (
                <div key={idx} className="border-b last:border-none p-2 text-sm font-mono">
                  {content}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
      <div id="privacy-policy">
          <PrivacyPolicy />
      </div>
    </>
  );
}