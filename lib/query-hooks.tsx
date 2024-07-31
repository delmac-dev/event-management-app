"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptMembership, bookTicket, declineMembership, deleteEventAttendee, deleteEventTicket, deleteMember, getAuthProfile, getBookableTickets, getEventAttendees, getEventByID, getEventTickets, getEventTicketSelect, getInvitor, getMaxCapacity, getMemberByID, getMemberEvents, getMembers, getMyTickets, getNotificationCount, getNotifications, getOrganisationByID, getOrganisationEvents, getProfile, getPublicEvent, getPublicEvents, getPublicTicket, getRegistor, getSearchedTickets, getUserOrganisations, getUserOrgSelect, modifyEvent, modifyEventAttendee, modifyEventTicket, modifyMember, modifyNotification, modifyOrganisation, modifyProfile, setEvent, setEventAttendee, setEventTicket, setMember, setOrganisation } from "./queries";
import { dashboardKeys, publicKeys } from "./query-keys";
import { createClient } from "./supabase/client";
import { HandleProfile } from "@/components/forms/handle-profile";
import { HandleTicketBooking } from "@/components/forms/handle-ticket-booking";
import { HandleAttendee } from "@/components/forms/handle-attendee";
import { HandleTicket } from "@/components/forms/handle-ticket";
import { HandleMember } from "@/components/forms/handle-member";
import { ModifyEvent } from "@/components/forms/modify-event";
import { NewEvent } from "@/components/forms/new-event";
import { ModifyOrganisation } from "@/components/forms/modify-organisation";
import { NewOrganisation } from "@/components/forms/new-organisation";

export function useGetAuthProfile() {
    const supabase = createClient();
    const queryKey = dashboardKeys.authProfile;
    const queryFn = async () => await getAuthProfile({supabase});

    return useQuery({ queryKey, queryFn });
}

export function useGetProfile() {
    const supabase = createClient();
    const queryKey = dashboardKeys.profile;
    const queryFn = async () => await getProfile({supabase});

    return useQuery({queryFn, queryKey, staleTime: 0 });
}

export const useModifyProfile = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.profile;
    return useMutation({
      mutationFn: async ({profileData, id}:{profileData: HandleProfile, id: string}) => (
        await modifyProfile({supabase, profileData, id})),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// ::::::::::::::::::::::::: DASHBOARD ORGANISATION HOOK ::::::::::::::::::::::::::
export function useGetUserOrganisations() {
    const supabase = createClient();
    const queryKey = dashboardKeys.orgs();
    const queryFn = async() => await getUserOrganisations({supabase});
    
    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetOrganisation = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgs();
    return useMutation({
      mutationFn: async({orgData}: {orgData: NewOrganisation;}) => (
        await setOrganisation({supabase, orgData})),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetOrganisationByID = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.org(id);
    const queryFn = async() => await getOrganisationByID({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useModifyOrganisation = ( id: string ) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.org(id);
    return useMutation({ 
        mutationFn: async({orgData, id}: {orgData: ModifyOrganisation;id: string;}) => (
            await modifyOrganisation({ supabase, orgData, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetOrganisationEvents = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.orgEvents(id);
    const queryFn = async () => await getOrganisationEvents({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

// ::::::::::::::::::::: ORGANISATION EVENTS HOOKS :::::::::::::::::::::::
export const useSetEvent = (id?: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = id? dashboardKeys.orgEvents(id):dashboardKeys.events();
    return useMutation({
      mutationFn: async({ eventData }: { eventData: NewEvent; }) => (
        await setEvent({ supabase, eventData })),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetMemberEvents = () => {
    const supabase = createClient();
    const queryKey = dashboardKeys.events();
    const queryFn = async () => await getMemberEvents({supabase});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetEventByID = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.event(id);
    const queryFn = async() => await getEventByID({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useModifyEvent = ( id: string ) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.event(id);
    return useMutation({ 
        mutationFn: async({ eventData, id }:{ eventData: ModifyEvent; id: string;}) => (
            await modifyEvent({ supabase, eventData, id })),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
};

// :::::::::::::::::::::: ORGAISATION MEMBERS HOOKS ::::::::::::::::::::::
export const useGetMembers = ( id: string ) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.orgMembers(id);
    const queryFn = async () => await getMembers({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
} 

export const useSetMember = (id: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgMembers(id);
    return useMutation({
      mutationFn: async({memberData}:{memberData: HandleMember;}) => (
        await setMember({ supabase, memberData })),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    }) 
}

export const useModifyMember = (id: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgMembers(id);
    return useMutation({ 
        mutationFn: async({memberData, id}:{ memberData: HandleMember; id: string;}) => (
            await modifyMember({supabase, memberData, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useDeleteMember = (memberID: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.orgMembers(memberID);
    return useMutation({ 
        mutationFn: async({id}:{id: string}) => await deleteMember({supabase, id}),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetMemberByID = (memberID: string, id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.orgMember(memberID, id);
    const queryFn = async() => await getMemberByID({supabase, id: memberID});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useAcceptMembership = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.notifications;
    return useMutation({ 
        mutationFn: async({id, memberID}:{ id: string; memberID: string;}) => (
            await acceptMembership({supabase, id, memberID})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
};

export const useDeclineMembership = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.notifications;
    return useMutation({ 
        mutationFn: async({id, memberID}:{ id: string; memberID: string;}) => (
            await declineMembership({supabase, id, memberID})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// ::::::::::::::::::::: EVENTS TICKET HOOKS ::::::::::::::::::::::::::::::
export const useGetEventTickets = ( id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.eventTickets(id);
    const queryFn = async () => await getEventTickets({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetEventTicket = (id: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventTickets(id);
    return useMutation({
      mutationFn: async({ticketData}:{ticketData: HandleTicket;}) => (
        await setEventTicket({supabase, ticketData})),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useDeleteEventTicket = (ticketID: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventTickets(ticketID);
    return useMutation({ 
        mutationFn: async({id}:{id: string}) => (
            await deleteEventTicket({supabase, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useModifyEventTicket = (ticketID: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventTickets(ticketID);
    return useMutation({ 
        mutationFn: async({ticketData, id}:{ ticketData: HandleTicket; id: string;} ) => (
            await modifyEventTicket({supabase, ticketData, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// :::::::::::::::::::: ATTENDEE HOOKS :::::::::::::::::::::::::::::::::::::;
export const useGetEventAttendees = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.eventAttendees(id);
    const queryFn = async () => await getEventAttendees({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useSetEventAttendee = (attendeeID: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventAttendees(attendeeID);
    return useMutation({
      mutationFn: async({attendeeData}:{attendeeData: HandleAttendee;}) => (
        await setEventAttendee({supabase, attendeeData})),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    }) 
}

export const useDeleteEventAttendee = (attendeeID: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventAttendees(attendeeID);
    return useMutation({ 
        mutationFn: async({id}:{id: string}) => (
            await deleteEventAttendee({supabase, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useModifyEventAttendee = (id: string) => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.eventAttendees(id);
    return useMutation({ 
        mutationFn: async({attendeeData}: { attendeeData: HandleAttendee; id: string; }) => (
            await modifyEventAttendee({supabase, attendeeData, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

// ::::::::::::::::::::::::::: PUBLIC HOOKS ::::::::::::::::::::::::::::::::

export const useGetPublicEvents = () => {
    const supabase = createClient();
    const queryKey = publicKeys.events();
    const queryFn = async () => await getPublicEvents({supabase});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetPublicEvent = (id: string) => {
    const supabase = createClient();
    const queryKey = publicKeys.event(id);
    const queryFn = async () => await getPublicEvent({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetPublicTicket = (id: string) => {
    const supabase = createClient();
    const queryKey = publicKeys.searchedTicket(id);
    const queryFn = async () => await getPublicTicket({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetBookableTickets = (id: string) => {
    const supabase = createClient();
    const queryKey = publicKeys.bookableTickets(id);
    const queryFn = async () => await getBookableTickets({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useBookTicket = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = publicKeys.events();
    return useMutation({ 
        mutationFn: async({attendeeData}: { attendeeData: HandleTicketBooking; }) => (
            await bookTicket({supabase, attendeeData})),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: queryKey });
            return data;
        }
    })
}

export const useGetMyTickets = () => {
    const supabase = createClient();
    const queryKey = dashboardKeys.tickets();
    const queryFn = async () => await getMyTickets({supabase});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetSearchedTickets = (searchData: string) => {
    const supabase = createClient();
    const queryKey = publicKeys.searchedTickets(searchData);
    
    const queryFn = async () => await getSearchedTickets({supabase, searchData});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

// :::::::::::::::::::::::::::::: NOTIFICATIONS HOOKS :::::::::::::::::::::::::::::::::::
export const useGetNotifications = () => {
    const supabase = createClient();
    const queryKey = dashboardKeys.notifications;
    
    const queryFn = async () => await getNotifications({supabase});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetNotificationCount = () => {
    const supabase = createClient();
    const queryKey = dashboardKeys.notificationCount;
    
    const queryFn = async () => await getNotificationCount({supabase});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useModifyNotification = () => {
    const supabase = createClient();
    const queryClient = useQueryClient();

    const queryKey = dashboardKeys.notifications;
    return useMutation({ 
        mutationFn: async({id}:{id: string}) => (
            await modifyNotification({supabase, id})),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey })
    })
}

export const useGetInvitor = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.notificationInvitor(id);
    
    const queryFn = async () => await getInvitor({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetRegistor = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.notificationRegistor(id);
    
    const queryFn = async () => await getRegistor({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

// :::::::::::::::::::::::::::::: FORM NECCESARY HOOKS ::::::::::::::::::::::::::::::::::
export const useGetUserOrgSelect = () => {
    const supabase = createClient();
    const queryKey = dashboardKeys.userOrgSelectList();
    const queryFn = async () => await getUserOrgSelect({supabase});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetEventTicketSelect = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.eventTicketSelect(id);
    const queryFn = async () => await getEventTicketSelect({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}

export const useGetMaxCapacity = (id: string) => {
    const supabase = createClient();
    const queryKey = dashboardKeys.maxCapacity(id);
    
    const queryFn = async () => await getMaxCapacity({supabase, id});

    return useQuery({queryKey, queryFn, refetchOnWindowFocus: false});
}