import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(link: string = '') {
  const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

    return `${origin}${link}`;
}

// const [icon, setIcon] = useState(CopyIcon);

// const copy = async () => {
// await navigator?.clipboard?.writeText(code);
// setIcon(CheckIcon);
// setTimeout(() => setIcon(CopyIcon), 2000);
// };