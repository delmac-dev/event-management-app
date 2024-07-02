import Link from "next/link";
import LogoIcon from "../icons/logo-icon";
import { _home } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function Logo({className}: {className?: string}) {
 return (
    <Link href={_home} className={cn("p-1 rounded-md flex_center", className)}>
        <LogoIcon className="h-7 w-7" />
    </Link>
 )
}