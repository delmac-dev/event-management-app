"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./queries";
import { dashboardKeys, publicKeys } from "./query-keys";

export function useGetProfile() {
    const queryKey = dashboardKeys.profile;
    const queryFn = async () => await getProfile();

    return useQuery({ queryKey, queryFn });
}