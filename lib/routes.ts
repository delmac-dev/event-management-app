
// auth
export const _login = '/auth/login';
export const _signUp = '/auth/join';

// public
export const _home = '/';
export const _events = '/events';
export const _event = (slug: string) => `${_events}/${slug}`;
export const _joinEvent = (slug: string) => `${_event(slug)}/join`;
export const _organisations = '/organisations';
export const _organisation = (slug: string) => `${_organisations}/${slug}`;
export const _tickets = '/tickets';
export const _ticket = (ticketCode: string) => `${_tickets}/${ticketCode}`;
export const _profile = (profileId: string) => `/profile/${profileId}`;

// private
export const _dashboard = `/dashboard`;

export const _dashboardEvents = `${_dashboard}/events`;
export const _dashboardEvent = (eventId: string) => `${_dashboardEvents}/${eventId}`;
export const _dashboardEventAttendees = (eventId: string) => `${_dashboardEvent(eventId)}/attendees`;
export const _dashboardEventModerators = (eventId: string) => `${_dashboardEvent(eventId)}/moderators`;
export const _dashboardEventRoles = (eventId: string) => `${_dashboardEvent(eventId)}/roles`;
export const _dashboardEventTickets = (eventId: string) => `${_dashboardEvent(eventId)}/tickets`;

export const _dashboardOrgs = `${_dashboard}/organisations`;
export const _dashboardOrg = (orgId: string) => `${_dashboardOrgs}/${orgId}`;
export const _dashboardOrgMembers = (orgId: string) => `${_dashboardOrg(orgId)}/members`;
export const _dashboardOrgEvents = (orgId: string) => `${_dashboardOrg(orgId)}/events`;
export const _dashboardOrgRoles = (orgId: string) => `${_dashboardOrg(orgId)}/roles`;

export const _dashboardTickets = `${_dashboard}/tickets`;
export const _dashboardProfile = `${_dashboard}/profile`;
export const _dashboardNotifications = `${_dashboard}/notifications`;
export const _dashboardSettings = `${_dashboard}/settings`;

// company
export const _company = '/company';
export const _contactUs = '/contact-us';
export const _Terms = '/terms'; 
export const _privacy = '/privacy';