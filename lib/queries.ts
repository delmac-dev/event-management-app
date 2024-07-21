"use server";

import { HandleProfile } from "@/components/forms/handle-profile";
import { createClient } from "./supabase/server";
import { createAdmin } from "./supabase/admin";
import { NewOrganisation } from "@/components/forms/new-organisation";
import { ModifyOrganisation } from "@/components/forms/modify-organisation";
import { FetchedOrganisationProps } from "./types";

const supabase = createClient();

const admin = createAdmin().auth.admin;

// ALL QUERIES RELATING TO PROFILE
export const getAuthProfile = async () => {
    const { data: { user: data }, error } = await supabase.auth.getUser();

    if(error) {
        console.log(error.message);
    }

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
export const getEvents = () => {
    // get all general events or user specific event;
    // for user specific event pass in user_events to the transaction
    // also pass in filter object to the transaction
};

export const getEventByID = () => {};
export const setEvent = () => {};
export const updateEvent = () => {};

export const getEventTickets = () => {};
export const setEventTicket = () => {};
export const updateEventTicket = () => {};
export const getEventTicketByID = () => {};

export const getEventAttendees = () => {};
export const setEventAttendee = () => {};
export const updateEventAttendee = () => {}; // for checking an attendee in 
export const deleteEventAttendee = () => {};

export const getEventModerators = () => {};
export const setEventModerator = () => {};
export const updateEventModerator = () => {};
export const removeEventModerator = () => {};

export const getEventRoles = () => {};
export const setEventRole = () => {};
export const updateEventRole = () => {};
export const removeEventRole = () => {};

// ALL QUERIES RELATING TO ORGANIZATIONS
export const getUserOrganisations = async() => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const { data, error } = await supabase
        .from('organisations')
        .select(`
            *,
            organisation_members (
                profiles ( avatar_url )
            )
        `)
        .eq('organisation_members.user_id', user.id);

    if (error) throw error;

    return data;
};

export const getOrganisationByID = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('organisations')
    .select(`
        *,
        owner(full_name)
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
    console.log({ name, headline, avatar_url, about, owner, category });

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
    
}

export const getOrganisationOwner = async({ id }: { id: string }) => {
    const { data, error } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', id)
    .single();

    return data
}

export const getOrganisationRoles = () => {};
export const setOrganisationRole = () => {};
export const updateOrganisationRole = () => {};
export const removeOrganisationRole = () => {};

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

export const getSettings = () => {};
export const updateSettings = () => {};