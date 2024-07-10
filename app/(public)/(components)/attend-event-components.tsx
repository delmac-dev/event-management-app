"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import nav, { useRouter } from "next/navigation";

export function AttendHeader() {
    const router = useRouter();

    return (
        <header className="main-container">
            <section className="sub_container h-16 flex items-center justify-start">
                <Button variant='outline' className="h-10 w-10 p-0 rounded-full" onClick={() => router.back()}>
                    <ArrowLeftIcon />
                </Button>
            </section>
        </header>
    )
}