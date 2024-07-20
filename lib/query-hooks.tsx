"use client";

import { useQuery } from "@tanstack/react-query";
import { getAuthProfile, getProfile } from "./queries";
import { dashboardKeys, publicKeys } from "./query-keys";

export function useGetAuthProfile() {
    const queryKey = dashboardKeys.authProfile;
    const queryFn = async () => await getAuthProfile();

    return useQuery({ queryKey, queryFn });
}

export function useGetProfile() {
    const queryKey = dashboardKeys.profile;
    const queryFn = async () => await getProfile();

    return useQuery({queryFn, queryKey});
}