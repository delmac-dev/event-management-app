import Link from "next/link";
import LogoIcon from "../icons/logo-icon";
import { _home } from "@/lib/routes";

export default function Logo() {
 return (
    <Link href={_home} className="w-9 h-9 rounded-md flex_center bg-foreground">
        <LogoIcon className="h-7 w-7 text-background" />
    </Link>
 )
}