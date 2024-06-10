import Link from "next/link";
import { Link as LinkIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

export type StarterProps = {
    title: string,
    description: string,
    icon: React.ElementType,
    links: LinksProp[]
}

export type LinksProp = {
    name: string,
    link: string
}

export function StarterHeader({title, description, icon, links}: StarterProps){
    return (
      <div className="p-4 rounded-md border bg-neutral-900">
        <h1 className="font-medium text-xl">{title}</h1>
        <p className="font-normal text-sm text-muted-foreground mt-2">{description}</p>
        <StarterLink links={links} />
      </div>
    )
}

export function StarterLink({links, isPrimary}: {links: LinksProp[], isPrimary?: boolean}) {
    return (
        <div className={cn("flex_center gap-2 justify-start mt-2", isPrimary? "mt-0 bg-neutral-900 p-4 rounded-md border" : "")}>
            {links.map((link, _i)=>(
                <Link href={link.link} className="text-xs flex_center gap-1 5 p-0.5 rounded-sm bg-neutral-800/30 hover:bg-neutral-800/50 backdrop-blur-sm">
                    <LinkIcon className="h-7 w-7" />
                    {link.name}
                </Link>
            ))}
        </div>
    )
}