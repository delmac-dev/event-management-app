import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { NavigationProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(link: string = '') {
  const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

    return `${origin}${link}`;
}

export const parseNavigation = (pathname: string, navigation: NavigationProps[]) => {
  return navigation.map(navigationItem => ({
    ...navigationItem,
    active: navigationItem.link === pathname
  }));
};

export const findItem = (id: string, data: any[]) => {
  return data.find(item => item.id === id);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function extractFilenameFromURL(url: string) {
  const parsedURL = new URL(url);
  const pathname = parsedURL.pathname;
  const segments = pathname.split('/');
  
  return segments[segments.length - 1];
}