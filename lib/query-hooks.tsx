"use client";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getAuthProfile, getProfile, modifyProfile } from "./queries";
import { dashboardKeys, publicKeys } from "./query-keys";
import { HandleProfile } from "@/components/forms/handle-profile";

const queryClient = new QueryClient();

export function useGetAuthProfile() {
    const queryKey = dashboardKeys.authProfile;
    const queryFn = async () => await getAuthProfile();

    return useQuery({ queryKey, queryFn, refetchOnWindowFocus: false });
}

export function useGetProfile() {
    const queryKey = dashboardKeys.profile;
    const queryFn = async () => await getProfile();

    return useQuery({queryFn, queryKey, refetchOnWindowFocus: false});
}

export const useModifyProfile = () => {
    const queryKey = dashboardKeys.profile;
    return useMutation({
      mutationFn: modifyProfile,
      onSuccess: () => queryClient.invalidateQueries({ queryKey })
    })
}