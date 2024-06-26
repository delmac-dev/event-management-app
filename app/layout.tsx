import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata:Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CampEvents - Campus Events Management and Ticketing.",
  description: "Manage and attend campus events with ease. Create, promote, and ticket your events in one plac",
  keywords: ["Campus Events", "Events Management", "Ticketing University Events", "College Events", "Events Registration", "Attendance Tracking"]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
