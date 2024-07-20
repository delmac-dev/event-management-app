"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient();
 
export function Providers({ children }:{ children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
      </NextThemesProvider>
    </QueryClientProvider>
)
}