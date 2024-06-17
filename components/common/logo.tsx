import Link from "next/link";
import LogoIcon from "../icons/logo-icon";
import { _home } from "@/lib/routes";

export default function Logo() {
 return (
    <Link href={_home} className="w-12 h-12 rounded-sm flex_center">
        <LogoIcon className="h-10 w-10 text-foreground" />
    </Link>
 )
}