"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuthProfile, getMemberEvents, getOrganisationByID, getOrganisationEvents, getProfile, getUserOrganisations, getUserOrgSelect, modifyOrganisation, modifyProfile, setEvent, setOrganisation } from "./queries";
import { dashboardKeys, publicKeys } from "./query-keys";

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
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.profile;
    return useMutation({
      mutationFn: modifyProfile,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export function useGetUserOrganisations() {
    const queryKey = dashboardKeys.orgs();
    const queryFn = async() => await getUserOrganisations();
    
    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetOrganisation = () => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgs();
    return useMutation({
      mutationFn: setOrganisation,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetOrganisationByID = (id: string) => {
    const queryKey = dashboardKeys.org(id);
    const queryFn = async() => await getOrganisationByID({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useModifyOrganisation = ( id: string ) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.org(id);
    return useMutation({ 
        mutationFn: modifyOrganisation,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetOrganisationEvents = (id: string) => {
    const queryKey = dashboardKeys.orgEvents(id);
    const queryFn = async () => await getOrganisationEvents({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetUserOrgSelect = () => {
    const queryKey = dashboardKeys.userOrgSelectList();
    const queryFn = async () => await getUserOrgSelect();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetEvent = (id?: string) => {
    const queryClient = useQueryClient();

    const queryKey = id? dashboardKeys.orgEvents(id):dashboardKeys.events();
    return useMutation({
      mutationFn: setEvent,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetMemberEvents = () => {
    const queryKey = dashboardKeys.events();
    const queryFn = async () => await getMemberEvents();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}