import Link from "next/link";
import LogoIcon from "../icons/logo-icon";
import { _home } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function Logo({className}: {className?: string}) {
 return (
    <Link href={_home} className="p-1 rounded-md flex_center">
        <LogoIcon className={cn("h-7 w-7", className)} />
    </Link>
 )
}