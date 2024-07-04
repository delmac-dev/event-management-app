"use client";

import { PanelProps } from "@/lib/types";
import { cn, parsePanel } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Panel({ panel, onClick }: { panel: PanelProps[], onClick?: () => void }) {
    const [content, setContent] = useState<PanelProps[] | null>(null);
    const pathname = usePathname();

    useEffect(()=> {
        setContent(parsePanel(pathname, panel));
    }, [pathname]);

    return (
        <div className="w-full h-full flex p-3">
            <ul className="flex-1">
                {content?.map(({ name, link, active }, _id) => (
                    <li key={_id} className="my-2.5">
                        <Link 
                            href={link}
                            onClick={onClick}
                            className={cn("block px-3 py-2 text-sm capitalize w-full rounded-full text-secondary-foreground transition-colors", active ? "bg-secondary" : "hover:bg-secondary")}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}