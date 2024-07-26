"use server";

import { HandleProfile } from "@/components/forms/handle-profile";
import { createClient } from "./supabase/server";
import { createAdmin } from "./supabase/admin";
import { NewOrganisation } from "@/components/forms/new-organisation";
import { ModifyOrganisation } from "@/components/forms/modify-organisation";
import { FetchedAttendeeProps, FetchedBookableTicketProps, FetchedEventProps, FetchedMembersProps, FetchedModifiableEventProps, FetchedModifiableMemberProps, FetchedMyTickets, FetchedOrganisationProps, FetchedPublicAttendeesProps, FetchedPublicEventProps, FetchedPublicEventsProps, FetchedTicketsProps, SearchedTicketsProps, TypedSupabaseClient } from "./types";
import { generateRandomNumber, stringToList } from "./utils";
import { NewEvent } from "@/components/forms/new-event";
import { ModifyEvent } from "@/components/forms/modify-event";
import { HandleMember } from "@/components/forms/handle-member";
import { HandleTicket } from "@/components/forms/handle-ticket";
import { HandleAttendee } from "@/components/forms/handle-attendee";
import { HandleTicketBooking } from "@/components/forms/handle-ticket-booking";

const supabase = createClient();

const admin = createAdmin().auth.admin;

// ALL QUERIES RELATING TO PROFILE
export const getAuthProfile = async () => {
    const { data: { user: data }, error } = await supabase.auth.getUser();
    
    return data ?? null;
};

export const getProfile = async () => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

    if(error) throw error;

    return data ?? null;
}

export const modifyProfile = async({ profileData, id }:{ profileData: HandleProfile, id: string }) => {
    const { email, full_name, avatar_url, username } = profileData;

    const { data, error } = await supabase
        .from('profiles')
        .update({ email, full_name, avatar_url, username })
        .eq('id', id);

    if (error) throw error;

    return data ?? null;
};

export const deleteProfile = async({ id }: { id: string }) => {
    const { data, error } = await admin.deleteUser(id);

    return data ?? null;
}

// ALL QUERIES RELATING TO EVENTS
export const getMemberEvents = async () => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const { data: dataList, error:orgListError} = await supabase
        .from('organisation_members')
        .select('organisation_id')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('updated_at', { ascending: false})

    if ( orgListError || !dataList) throw new Error("Error fetching events");

    const orgList = dataList.map(item => item.organisation_id)
 
    const { data, error } = await supabase
        .from('events')
        .select(`
            *
        `)
        .in('organisation_id', orgList);

    if(error) throw error;

    return data ?? [] as FetchedEventProps[];
};

export const getEventByID = async ({id}:{id:string}) => {
    const { data, error } = await supabase
    .from('events')
    .select(`
        *,
        organisation_id(value:id, label:name),
        organiser(value:id, label:full_name)
    `)
    .eq("id", id)
    .single()

    if(error) throw error;

    return data as unknown as FetchedModifiableEventProps;
};

export const setEvent = async ({eventData}:{eventData: NewEvent}) => {
    const { data: { user }} = await supabase.auth.getUser();
    let {organisation_id, name, headline, capacity, event_type, category, tags, event_date, start_at, end_at, location, banner} = eventData;
    if (!user) throw new Error('No user logged in');

    const { error } = await supabase
    .from('events')
    .insert({ 
        name, organisation_id, capacity, category, headline, event_type, 
        organiser: user.id, 
        tags: stringToList(tags), 
        event_date, start_at, end_at, location, banner
    })

    if (error) throw error;

    return null;
};

export const modifyEvent = async ({ eventData, id }: { eventData: ModifyEvent, id: string }) => {
    const {name, headline, category, capacity, tags, 
        event_type, banner, is_published, about, event_date, start_at, end_at, 
        location, faq, agenda
    } = eventData;

    const { data, error } = await supabase
    .from('events')
    .update({ name, headline, category, capacity, event_type, banner, is_published, 
                about, event_date, start_at, end_at, location, faq, agenda, tags: stringToList(tags) })
    .eq('id', id);

    if(error) throw error;

    return data ?? null;
};

export const deleteEvent = async ({id}:{id: string}) => {
    const { data } = await supabase
    .from('events')
    .delete()
    .eq('id', id);

    return data ?? null;
}

// :::::::::::::::::::::::::::: EVENT TICKETS QUERIES ::::::::::::::::::::::::::::::::::::
export const getEventTickets = async ({id}:{id: string}) => {
    const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .eq("event_id", id)
    .order('updated_at', { ascending: false});

    if(error) throw error;

    return data as FetchedTicketsProps[];;
};

export const setEventTicket = async ({ticketData}:{ticketData: HandleTicket}) => {
    const {event_id, name, availability, ticket_code_prefix: tcp, total_tickets, ticket_type, price, is_active} = ticketData;
    const { error } = await supabase
        .from('tickets')
        .insert({event_id, name, availability, ticket_type, price, is_active,
            total_tickets: total_tickets,
            available_tickets: total_tickets,
            ticket_code_prefix: tcp !== "" ? tcp : "TCX" 
        });

    if (error) throw error;

    return null;
};

export const modifyEventTicket = async ({ticketData, id}: { ticketData: HandleTicket, id: string}) => {
    const { name, availability, ticket_code_prefix: tcp, total_tickets, ticket_type, price, is_active } = ticketData;

    const { data, error } = await supabase
    .from('tickets')
    .update({ name, availability, ticket_type, price, is_active,
        total_tickets: total_tickets,
        available_tickets: total_tickets,
        ticket_code_prefix: tcp !== "" ? tcp : "TCX" 
    })
    .eq('id', id);

    if(error) throw error;

    return data ?? null;
};

export const deleteEventTicket = async ({ id }: { id: string }) => {
    const { data } = await supabase
    .from('tickets')
    .delete()
    .eq('id', id);

    return data ?? null;
}

// :::::::::::::::::::::::::::: EVENT ATTENDEE QUERIES ::::::::::::::::::::::::::::::::::::
export const getEventAttendees = async ({id}:{id: string}) => {
    const { data, error } = await supabase
    .from('attendees')
    .select('*')
    .eq("event_id", id)
    .order('updated_at', { ascending: false });

    if(error) throw error;

    return data as FetchedAttendeeProps[];
};

export const setEventAttendee = async ({attendeeData}:{attendeeData: HandleAttendee}) => {
    const {event_id, user_id, ticket_id, full_name, email, status, payment_status} = attendeeData;

    const { data: prefixData, error: prefixError } = await supabase
    .from('tickets')
    .select('ticket_code_prefix')
    .eq('id', ticket_id)
    .single();
    
    if (!prefixData || prefixError)
        throw new Error('Error fetching ticket code prefix');
    
    const ticket_code = `${prefixData.ticket_code_prefix}${generateRandomNumber()}`;

    const { error } = await supabase
        .from('attendees')
        .insert({event_id, user_id, ticket_id, full_name, email, status, payment_status, ticket_code});

    if (error) throw error;

    return null;
};

export const modifyEventAttendee = async ({attendeeData, id}: { attendeeData: HandleAttendee, id: string}) => {
    const {ticket_id, full_name, email, status, payment_status} = attendeeData;

    const { data, error } = await supabase
    .from('attendees')
    .update({ ticket_id, full_name, email, status, payment_status })
    .eq('id', id);

    if(error) throw error;

    return data ?? null;
};

export const deleteEventAttendee = async ({ id }: { id: string }) => {
    const { data } = await supabase
    .from('attendees')
    .delete()
    .eq('id', id);

    return data ?? null;
};

// ALL QUERIES RELATING TO ORGANIZATIONS
export const getUserOrganisations = async() => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const { data: organisationsData, error: orgError } = await supabase
    .from('organisation_members')
    .select('organisations(*)')
    .eq('user_id', user.id);

    if (!organisationsData || orgError) throw new Error(orgError?.message || "Error fetching organisations");

    const organisations = organisationsData.map((data) => data.organisations)

    const fetchOrganisationMembers = async (organisationId: string) => {
        const { data: members, error: memberError } = await supabase
            .from('organisation_members')
            .select('profiles (avatar_url)')
            .eq('organisation_id', organisationId)
            .neq('is_active', false)
    
        if (!members || memberError) throw new Error(memberError?.message || "Error fetching organisations");

        return members.map(member => member?.profiles?.avatar_url) as string[];
    };

    const filteredOrganisations = await Promise.all(
        organisations.map(async (organisation) => {
            const avatars = organisation && await fetchOrganisationMembers(organisation.id);
            return {
                ...organisation,
                organisation_members: avatars
            };
        })
    );
    
    return filteredOrganisations ?? null as unknown as FetchedOrganisationProps[];
};

export const getOrganisationByID = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('organisations')
    .select(`
        *,
        profiles(id, full_name)
    `)
    .eq("id", id)
    .single()

    if(error) throw error;

    return data ?? null as unknown as FetchedOrganisationProps;
};

export const setOrganisation = async({orgData}:{orgData: NewOrganisation}) => {
    const { data: { user }} = await supabase.auth.getUser();
    let { name, headline, about, avatar_url, category } = orgData;
    if (!user) throw new Error('No user logged in');

    const { error } = await supabase
        .from('organisations')
        .insert({ name, owner: user.id, headline, about, avatar_url, category })

    if (error) throw error;

    return null;
};

export const modifyOrganisation = async({ orgData, id }: { orgData: ModifyOrganisation, id: string }) => {
    const { name, headline, avatar_url, about, owner, category } = orgData;

    const { data, error } = await supabase
    .from('organisations')
    .update({ name, headline, avatar_url, about, owner, category })
    .eq('id', id);

    if(error) throw error;

    return data ?? null;
};

export const deleteOrganisation = async({ id }: { id: string }) => {

    const { data } = await supabase
    .from('organisations')
    .delete()
    .eq('id', id);

    return data ?? null;
}

export const getOrganisationEvents = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('events')
    .select(`
        *
    `)
    .eq('organisation_id', id);

    if(error) throw error;

    return data ?? null as FetchedEventProps[] | null;
}

export const getOrganisationOwner = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', id)
    .single();

    return data ?? null
}

// :::::::::::::::::::::::::::::: ORGANISATION MEMBERS QUERIES :::::::::::::::::::::::::::::::::::::::
export const getMembers = async ({id}:{id: string}) => {
    const { data, error } = await supabase
    .from('organisation_members')
    .select(`
            id, organisation_id, is_active, has_accepted, 
            profiles(id, full_name, email, avatar_url)
        `)
    .eq("organisation_id", id)
    .order('updated_at', { ascending: false})

    if(error) throw error;

    return data as FetchedMembersProps[];
};

export const getMemberByID = async ({id}:{id: string}) => {
    const { data, error } = await supabase
    .from('organisation_members')
    .select('is_active, user: profiles(value: id, label: full_name)')
    .eq("id", id)
    .single()

    if(error) throw error;

    return data ?? null as FetchedModifiableMemberProps | null;
}

export const setMember = async ({memberData}:{memberData: HandleMember}) => {
    const { organisation_id, user_id, is_active } = memberData;

    const { error } = await supabase
        .from('organisation_members')
        .insert({ organisation_id, user_id, is_active });

    if (error) throw error;

    return null;
};

export const modifyMember = async ({memberData, id}: { memberData: HandleMember, id: string}) => {
    const { is_active } = memberData;

    const { data, error } = await supabase
    .from('organisation_members')
    .update({ is_active })
    .eq('id', id);

    if(error) throw error;

    return data ?? null;
};

export const deleteMember = async ({ id }: { id: string }) => {
    const { data } = await supabase
    .from('organisation_members')
    .delete()
    .eq('id', id);

    return data ?? null;
};

export const acceptMembership = async ({ memberID }: { memberID: string }) => {

}

export const declineMembership = async ({ memberID }: { memberID: string }) => {

}

export const getMyTickets = async () => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const {data, error} = await supabase
    .from('attendees')
    .select('*')
    .eq('user_id', user.id)

    if(error) throw error;

    return data as FetchedMyTickets[];
}

// ::::::::::::::::::::::::::::: PUBLIC QUERIES :::::::::::::::::::::::::::::::::::::::::::
export const getPublicEvents = async () => {
    const { data, error} = await supabase
    .from('events')
    .select('id, about, name, headline, banner, event_date, end_at, start_at, location, tags, profiles(id, full_name, avatar_url)')
    .eq('is_published', true)
    .eq('event_type', 'public')

    if(error) console.log({error});

    return data as FetchedPublicEventsProps[];
}

export const getPublicEvent = async ({id}:{id: string}) => {
    const { data:eventData, error:eventError} = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single()

    const { data: ticketsData, error: ticketsError} = await supabase
    .from('tickets')
    .select('*')
    .eq('event_id', id) 

    if(eventError) throw eventError;

    const data = { ...eventData, tickets: ticketsData };

    return data as FetchedPublicEventProps;
}

export const getPublicTicket = async ({id}:{id: string}) => {
    const {data, error} = await supabase
    .from('attendees')
    .select(`
        *,
        tickets( id, ticket_type, name, events(id, name, headline, banner, event_date, start_at))
    `)
    .eq('id', id)
    .single();

    if(error) throw error;

    return data as FetchedPublicAttendeesProps;
}

export const getSearchedTickets = async ({searchData}: { searchData: string}) => {
    if(searchData === '') return [];

    const { data, error } = await supabase
    .from('attendees')
    .select('id, ticket_id, full_name, email, ticket_code')
    .or(`full_name.ilike.%${searchData}%,email.ilike.%${searchData}%`);

    if(error) throw error;
    
    return data as SearchedTicketsProps[];
}

export const getBookableTickets = async ({id}:{id: string}) => {
    const { data, error} = await supabase
    .from('tickets')
    .select('id, name, total_tickets, available_tickets, ticket_type, price')
    .eq('event_id', id)
    .order('updated_at', { ascending: false});

    if(error) throw error;

    return data as FetchedBookableTicketProps[];
};

export const bookTicket = async ({attendeeData}: { attendeeData: HandleTicketBooking}) => {
    let { ticket_id, full_name, user_id, email, event_id} = attendeeData;
    let has_account= true;
    let status = "registered";
    let payment_status = "completed";

    const { data: prefixData, error: prefixError } = await supabase
    .from('tickets')
    .select('ticket_code_prefix')
    .eq('id', ticket_id)
    .single();
    
    if (!prefixData || prefixError)
        throw new Error('Error fetching ticket code prefix');
    
    let ticket_code = `${prefixData.ticket_code_prefix}${generateRandomNumber()}`;

    if(user_id === '') {
        has_account = false;
        user_id = null;
    } 
        

    const { data, error } = await supabase
    .from('attendees')
    .insert({ event_id, ticket_id, full_name, email, user_id, has_account, ticket_code, status, payment_status })
    .select()
    .single();

    if(error) throw error;

    return data as FetchedAttendeeProps;
}

export const unbookTicket = () => {};

// :::::::::::::::::::::::::::::::::::::: NOTIFICATIONS QUERIES ::::::::::::::::::::::::::::::::::
export const getNotificationCount = async() => {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData || !userData.user) {
        throw new Error('No user logged in');
    }

    const user = userData.user;

    const { count: allCount, error:allError } = await supabase
    .from('notifications')
    .select('*', { count: 'estimated', head: true })
    .eq('user_id', user.id)
    .eq('is_read', false);

    const { count: infoCount, error:infoError } = await supabase
    .from('notifications')
    .select('*', { count: 'estimated', head: true })
    .eq('user_id', user.id)
    .eq('is_read', false)
    .eq('type', 'info');

    const { count: actionCount, error:actionError } = await supabase
    .from('notifications')
    .select('*', { count: 'estimated', head: true })
    .eq('user_id', user.id)
    .eq('is_read', false)
    .eq('type', 'action');

    if(allError || infoError || actionError)
        throw new Error('Error occured fetching count');

    const data = {
        all: allCount || 0,
        info: infoCount || 0,
        action: actionCount || 0
    }

    return data;
}

export const getNotifications = async({tab}:{tab: string}) => {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData || !userData.user) {
    throw new Error('No user logged in');
    }

    const user = userData.user;

    let query = supabase
    .from('notifications')
    .select('*')
    .eq('user_id', user.id)
    .eq('is_read', false);

    if (tab) {
        query = query.eq('type', tab);
    }

    const { data, error } = await query;

    if(error) throw error;

    return data ?? null;
};

export const modifyNotification = async({id}:{id: string}) => {
    const { data, error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('id', id);

    if(error) throw error;

    return data ?? null;
};

// ::::::::::::::::::::::::::::: FORM NECCESSARY QUERIES ::::::::::::::::::::::::::::::::::
export const getUserOrgSelect = async () => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const { data, error } = await supabase
    .from('organisation_members')
    .select('organisation_id:organisations(value:id, label:name)')
    .eq('user_id', user.id);

    if (error) throw error;

    const organisations = data.map(member => member.organisation_id)

    return organisations as { value: string; label: string }[];
}

export const getEventTicketSelect = async ({id}:{id: string}) => {
    const { data, error } = await supabase
    .from('tickets')
    .select('value:id, label:name')
    .eq("event_id", id)

    if(error) throw error;

    return data ?? null;
}

export const getMaxCapacity = async ({ id }: { id: string }) => {
    const { data: event, error: eventError } = await supabase
    .from('events')
    .select('capacity')
    .eq('id', id)
    .single();

    if (eventError) throw eventError;

    const { data: tickets, error: ticketsError } = await supabase
    .from('tickets')
    .select('total_tickets')
    .eq('event_id', id);

    if (ticketsError) throw ticketsError;

    const totalTickets = tickets.reduce((sum, ticket) => sum + ticket.total_tickets, 0);

    const maxCapacity = {
        total_capacity: event.capacity || 0,
        used_capacity: totalTickets || 0,
    };

    return maxCapacity;
};