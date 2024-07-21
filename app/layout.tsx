import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/common/providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata:Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CampEvents - Campus Events Management and Ticketing.",
  description: "Manage and attend campus events with ease. Create, promote, and ticket your events in one place",
  keywords: ["Campus Events", "Events Management", "Ticketing University Events", "College Events", "Events Registration", "Attendance Tracking"]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
