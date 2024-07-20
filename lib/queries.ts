"use server";

import { HandleProfile } from "@/components/forms/handle-profile";
import { createClient } from "./supabase/server";

const supabase = createClient();

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

export const modifyProfile = async(profileData: HandleProfile) => {
    const { data: { user }} = await supabase.auth.getUser();

    if (!user) throw new Error('No user logged in');

    const { email, full_name, avatar_url, username } = profileData

    const { data, error } = await supabase
        .from('profiles')
        .update({ email, full_name, avatar_url, username })
        .eq('id', user.id);

    if (error) throw error;

    return data;
};

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
export const getOrganisations = () => {};
export const getOrganisationByID = () => {};
export const setOrganisation = () => {};
export const updateOganisation = () => {};

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