"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";

export function NewEventModal({ isOpen=false }:{ isOpen?: boolean }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isOpen);
      }, [isOpen]);

    return (
        <Dialog open = {open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="xs">New Event</Button>
            </DialogTrigger>
            <DialogContent  className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Start a new Event</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter className="justify-center">
                    <Button type="submit" size="xs">Create Organisation</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
