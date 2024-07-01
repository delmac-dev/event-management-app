"use client";

import Link from "next/link";
import { Link as LinkIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toast } from "sonner";

export type StarterProps = {
    title: string,
    description: string,
    icon?: React.ElementType,
    links: LinksProp[]
}

export type LinksProp = {
    name: string,
    link: string
}

export function StarterHeader({title, description, icon, links}: StarterProps){
    return (
      <div className="mx-4 p-4 rounded-md border bg-neutral-50">
        <h1 className="font-medium text-xl">{title}</h1>
        <p className="font-normal text-sm text-muted-foreground mt-2">{description}</p>
        <StarterLink links={links} />
      </div>
    )
}

export function StarterLink({links, isPrimary}: {links: LinksProp[], isPrimary?: boolean}) {
    return (
        <div className={cn("flex_center gap-2 justify-start mt-2 flex-wrap", isPrimary? "mx-4 mt-0 bg-neutral-50 p-4 rounded-md border" : "")}>
            {links.map((link, _i)=>(
                <Link key={_i} href={link.link} className="text-xs flex_center shrink-0 gap-1 5 p-1.5 rounded-sm bg-neutral-200/90 hover:bg-neutral-200 backdrop-blur-sm">
                    <LinkIcon className="h-3 w-3" />
                    {link.name}
                </Link>
            ))}
        </div>
    )
}

export function SonnerDemo() {
    return (
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    )
}