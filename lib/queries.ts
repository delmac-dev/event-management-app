"use server";

import { HandleProfile } from "@/components/forms/handle-profile";
import { createClient } from "./supabase/server";
import { createAdmin } from "./supabase/admin";
import { NewOrganisation } from "@/components/forms/new-organisation";
import { ModifyOrganisation } from "@/components/forms/modify-organisation";
import { FetchedEventProps, FetchedModifiableEventProps, FetchedOrganisationProps } from "./types";
import { stringToList } from "./utils";
import { NewEvent } from "@/components/forms/new-event";
import { ModifyEvent } from "@/components/forms/modify-event";

const supabase = createClient();

const admin = createAdmin().auth.admin;

// ALL QUERIES RELATING TO PROFILE
export const getAuthProfile = async () => {
    const { data: { user: data }, error } = await supabase.auth.getUser();

    if(error) throw error;
    
    return data;
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

    return data;
}

export const modifyProfile = async({ profileData, id }:{ profileData: HandleProfile, id: string }) => {
    const { email, full_name, avatar_url, username } = profileData;

    const { data, error } = await supabase
        .from('profiles')
        .update({ email, full_name, avatar_url, username })
        .eq('id', id);

    if (error) throw error;

    return data;
};

export const deleteProfile = async({ id }: { id: string }) => {
    const { data, error } = await admin.deleteUser(id);

    return data;
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

    if ( orgListError || !dataList) throw new Error("Error fetching events");

    const orgList = dataList.map(item => item.organisation_id)
 
    const { data, error } = await supabase
        .from('events')
        .select(`
            *
        `)
        .in('organisation_id', orgList);

    if(error) throw error;

    return data as FetchedEventProps[];
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

    return data;
};

export const deleteEvent = async ({id}:{id: string}) => {
    const { data } = await supabase
    .from('events')
    .delete()
    .eq('id', id);

    return data;
}

export const getEventTickets = () => {};
export const setEventTicket = () => {};
export const updateEventTicket = () => {};
export const getEventTicketByID = () => {};

export const getEventAttendees = () => {};
export const setEventAttendee = () => {};
export const updateEventAttendee = () => {};
export const deleteEventAttendee = () => {};

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
            .eq('organisation_id', organisationId);
    
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
    
    return filteredOrganisations as unknown as FetchedOrganisationProps[];
};

export const getOrganisationByID = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('organisations')
    .select(`
        *,
        owner(id, full_name)
    `)
    .eq("id", id)
    .single()

    if(error) throw error;

    return data as unknown as FetchedOrganisationProps;
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

    return data;
};

export const deleteOrganisation = async({ id }: { id: string }) => {

    const { data } = await supabase
    .from('organisations')
    .delete()
    .eq('id', id);

    return data;
}

export const getOrganisationEvents = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('events')
    .select(`
        *
    `)
    .eq('organisation_id', id);

    if(error) throw error;

    return data as FetchedEventProps[];
}

export const getOrganisationOwner = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', id)
    .single();

    return data
}

export const getOrgansationMembers = () => {};
export const setOrganisationMember = () => {};
export const updateOrganisationMember = () => {};
export const removeOrganisationMember = () => {};

// ALL QUERIES RELATING TO TICKETS
export const getTicketByCode = () => {};
export const getTickets = () => {};
export const unbookTicket = () => {};

export const getNotifications = () => {};
export const updateNotification = () => {};

// FORM NECCESSARY QUERIES
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