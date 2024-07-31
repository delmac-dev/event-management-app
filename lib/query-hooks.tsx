"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptMembership, bookTicket, declineMembership, deleteEventAttendee, deleteEventTicket, deleteMember, getAuthProfile, getBookableTickets, getEventAttendees, getEventByID, getEventTickets, getEventTicketSelect, getInvitor, getMaxCapacity, getMemberByID, getMemberEvents, getMembers, getMyTickets, getNotificationCount, getNotifications, getOrganisationByID, getOrganisationEvents, getProfile, getPublicEvent, getPublicEvents, getPublicTicket, getRegistor, getSearchedTickets, getUserOrganisations, getUserOrgSelect, modifyEvent, modifyEventAttendee, modifyEventTicket, modifyMember, modifyNotification, modifyOrganisation, modifyProfile, setEvent, setEventAttendee, setEventTicket, setMember, setOrganisation } from "./queries";
import { dashboardKeys, publicKeys } from "./query-keys";

export function useGetAuthProfile() {
    const queryKey = dashboardKeys.authProfile;
    const queryFn = async () => await getAuthProfile();

    return useQuery({ queryKey, queryFn });
}

export function useGetProfile() {
    const queryKey = dashboardKeys.profile;
    const queryFn = async () => await getProfile();

    return useQuery({queryFn, queryKey, staleTime: 0 });
}

export const useModifyProfile = () => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.profile;
    return useMutation({
      mutationFn: modifyProfile,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// ::::::::::::::::::::::::: DASHBOARD ORGANISATION HOOK ::::::::::::::::::::::::::
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

// ::::::::::::::::::::: ORGANISATION EVENTS HOOKS :::::::::::::::::::::::
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

// :::::::::::::::::::::: ORGAISATION MEMBERS HOOKS ::::::::::::::::::::::
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

export const useAcceptMembership = () => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.notifications;
    return useMutation({ 
        mutationFn: acceptMembership,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
};

export const useDeclineMembership = () => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.notifications;
    return useMutation({ 
        mutationFn: declineMembership,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// ::::::::::::::::::::: EVENTS TICKET HOOKS ::::::::::::::::::::::::::::::
export const useGetEventTickets = ( id: string) => {
    const queryKey = dashboardKeys.eventTickets(id);
    const queryFn = async () => await getEventTickets({id});

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

export const useModifyEventTicket = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventTickets(id);
    return useMutation({ 
        mutationFn: modifyEventTicket,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// :::::::::::::::::::: ATTENDEE HOOKS :::::::::::::::::::::::::::::::::::::;
export const useGetEventAttendees = (id: string) => {
    const queryKey = dashboardKeys.eventAttendees(id);
    const queryFn = async () => await getEventAttendees({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetEventAttendee = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventAttendees(id);
    return useMutation({
      mutationFn: setEventAttendee,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    }) 
}

export const useDeleteEventAttendee = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventAttendees(id);
    return useMutation({ 
        mutationFn: deleteEventAttendee,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useModifyEventAttendee = (id: string) => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventAttendees(id);
    return useMutation({ 
        mutationFn: modifyEventAttendee,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// ::::::::::::::::::::::::::: PUBLIC HOOKS ::::::::::::::::::::::::::::::::

export const useGetPublicEvents = () => {
    const queryKey = publicKeys.events();
    const queryFn = async () => await getPublicEvents();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetPublicEvent = (id: string) => {
    const queryKey = publicKeys.event(id);
    const queryFn = async () => await getPublicEvent({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetPublicTicket = (id: string) => {
    const queryKey = publicKeys.searchedTicket(id);
    const queryFn = async () => await getPublicTicket({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetBookableTickets = (id: string) => {
    const queryKey = publicKeys.bookableTickets(id);
    const queryFn = async () => await getBookableTickets({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useBookTicket = () => {
    const queryClient = useQueryClient();

    const queryKey = publicKeys.events();
    return useMutation({ 
        mutationFn: bookTicket,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKey });
            return data;
        }
    })
}

export const useGetMyTickets = () => {
    const queryKey = dashboardKeys.tickets();
    const queryFn = async () => await getMyTickets();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetSearchedTickets = (searchData: string) => {
    const queryKey = publicKeys.searchedTickets(searchData);
    
    const queryFn = async () => await getSearchedTickets({searchData});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

// :::::::::::::::::::::::::::::: NOTIFICATIONS HOOKS :::::::::::::::::::::::::::::::::::
export const useGetNotifications = () => {
    const queryKey = dashboardKeys.notifications;
    
    const queryFn = async () => await getNotifications();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetNotificationCount = () => {
    const queryKey = dashboardKeys.notificationCount;
    
    const queryFn = async () => await getNotificationCount();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useModifyNotification = () => {
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.notifications;
    return useMutation({ 
        mutationFn: modifyNotification,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetInvitor = (id: string) => {
    const queryKey = dashboardKeys.notificationInvitor(id);
    
    const queryFn = async () => await getInvitor({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetRegistor = (id: string) => {
    const queryKey = dashboardKeys.notificationRegistor(id);
    
    const queryFn = async () => await getRegistor({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

// :::::::::::::::::::::::::::::: FORM NECCESARY HOOKS ::::::::::::::::::::::::::::::::::
export const useGetUserOrgSelect = () => {
    const queryKey = dashboardKeys.userOrgSelectList();
    const queryFn = async () => await getUserOrgSelect();

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetEventTicketSelect = (id: string) => {
    const queryKey = dashboardKeys.eventTicketSelect(id);
    const queryFn = async () => await getEventTicketSelect({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetMaxCapacity = (id: string) => {
    const queryKey = dashboardKeys.maxCapacity(id);
    
    const queryFn = async () => await getMaxCapacity({id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}