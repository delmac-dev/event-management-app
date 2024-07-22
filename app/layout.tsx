import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/common/providers";
import { getUrl } from "@/lib/utils";

const defaultUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata:Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CampEvents - Campus Events Management and Ticketing.",
  description: "Manage and attend campus events with ease. Create, promote, and ticket your events in one place " + getUrl("/auth/callback"),
  keywords: ["Campus Events", "Events Management", "Ticketing University Events", "College Events", "Events Registration", "Attendance Tracking"]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
