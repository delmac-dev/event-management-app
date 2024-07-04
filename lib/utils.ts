import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BreadcrumbProps, PanelProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(link: string = '') {
  const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

    return `${origin}${link}`;
}

export const getPathSegments = (pathname: string) => {
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  let accumulatedPath = '';
  const segmentedList = pathSegments.map(segment => {
    accumulatedPath += `/${segment}`;
    return {
      name: segment,
      link: accumulatedPath,
    };
  });

  return segmentedList;
};

export const parsePanel = (pathname: string, panel: PanelProps[]) => {
  return panel.map(panelItem => ({
    ...panelItem,
    active: panelItem.link === pathname
  }));
};