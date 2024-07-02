import { cn } from "@/lib/utils";

export default function LogoIcon({className}: {className?: string}) {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
            <path className=" fill-neutral-500" d="M20 30C18.6193 30 17.5 31.1193 17.5 32.5C17.5 33.8807 18.6193 35 20 35H40C41.3807 35 42.5 33.8807 42.5 32.5C42.5 31.1193 41.3807 30 40 30H20Z"/>
            <path className=" fill-neutral-500" d="M17.5 42.5C17.5 41.1193 18.6193 40 20 40H30C31.3807 40 32.5 41.1193 32.5 42.5C32.5 43.8807 31.3807 45 30 45H20C18.6193 45 17.5 43.8807 17.5 42.5Z"/>
            <path className=" fill-neutral-800" fillRule="evenodd" clipRule="evenodd" d="M17.5 5C18.8807 5 20 6.1193 20 7.5V10H40V7.5C40 6.1193 41.1193 5 42.5 5C43.8807 5 45 6.1193 45 7.5V10.25C50.7055 11.4082 55 16.4526 55 22.5V42.5C55 49.4035 49.4035 55 42.5 55H17.5C10.5964 55 5 49.4035 5 42.5V22.5C5 16.4526 9.2944 11.4082 15 10.25V7.5C15 6.1193 16.1193 5 17.5 5ZM50 25H10V42.5C10 46.6423 13.3579 50 17.5 50H42.5C46.6423 50 50 46.6423 50 42.5V25Z"/>
        </svg>
    )
}