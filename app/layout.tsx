import { ThemeProvider } from "@/components/common/theme-provider"
import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
