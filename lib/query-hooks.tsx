"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEventTicket, deleteMember, getAuthProfile, getEventByID, getEventTicketByID, getEventTickets, getMemberByID, getMemberEvents, getMembers, getOrganisationByID, getOrganisationEvents, getProfile, getUserOrganisations, getUserOrgSelect, modifyEvent, modifyMember, modifyOrganisation, modifyProfile, setEvent, setEventTicket, setMember, setOrganisation } from "./queries";
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

export const useGetEventByID = (id: string) => {
    const queryKey = dashboardKeys.event(id);
    const queryFn = async() => await getEventByID({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useModifyEvent = ( id: string ) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.event(id);
    return useMutation({ 
        mutationFn: modifyEvent,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
};

export const useGetMembers = ( id: string ) => {
    const queryKey = dashboardKeys.orgMembers(id);
    const queryFn = async () => await getMembers({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
} 

export const useSetMember = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgMembers(id);
    return useMutation({
      mutationFn: setMember,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    }) 
}

export const useModifyMember = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgMembers(id);
    return useMutation({ 
        mutationFn: modifyMember,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useDeleteMember = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgMembers(id);
    return useMutation({ 
        mutationFn: deleteMember,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetMemberByID = (memberID: string, id: string) => {
    const queryKey = dashboardKeys.orgMember(memberID, id);
    const queryFn = async() => await getMemberByID({id: memberID});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetEventTickets = ( id: string) => {
    const queryKey = dashboardKeys.eventTickets(id);
    const queryFn = async () => await getEventTickets({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetEventTicketByID = (ticketID: string, id: string) => {
    const queryKey = dashboardKeys.eventTicket(ticketID, id);
    const queryFn = async() => await getEventTicketByID({id: ticketID});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetEventTicket = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventTickets(id);
    return useMutation({
      mutationFn: setEventTicket,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    }) 
}

export const useDeleteEventTicket = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventTickets(id);
    return useMutation({ 
        mutationFn: deleteEventTicket,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}