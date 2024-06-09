
// auth
export const _login = '/auth/login';
export const _signUp = '/auth/join';

// public
export const _home = '/';
export const _events = '/events';
export const _event = (slug: string) => `${_events}/${slug}`;
export const _joinEvent = (slug: string) => `${_event(slug)}/join`;
export const _organisations = '/organisations';
export const _organisation = (slug: string) => `${_organisation}/${slug}`;
export const _ticket = (ticketCode: string) => `/ticket/${ticketCode}`;
export const _profile = (profileId: string) => `/profile/${profileId}`;

// private
export const _dashboard = (profileId: string) => `/dashboard/${profileId}`;

export const _dashboardEvents = (profileId: string) => `${_dashboard(profileId)}/events`;
export const _dashboardEvent = (profileId: string, eventId: string) => `${_dashboardEvents(profileId)}/${eventId}`;
export const _dashboardEventAttendees = (profileId: string, eventId: string) => `${_dashboardEvent(profileId, eventId)}/attendees`;
export const _dashboardEventModerators = (profileId: string, eventId: string) => `${_dashboardEvent(profileId, eventId)}/moderators`;
export const _dashboardEventRoles = (profileId: string, eventId: string) => `${_dashboardEvent(profileId, eventId)}/roles`;
export const _dashboardEventTickets = (profileId: string, eventId: string) => `${_dashboardEvent(profileId, eventId)}/tickets`;

export const _dashboardOrgs = (profileId: string) => `${_dashboard(profileId)}/organisations`;
export const _dashboardOrg = (profileId: string, orgId: string) => `${_dashboardOrgs(profileId)}/${orgId}`;
export const _dashboardOrgMembers = (profileId: string, orgId: string) => `${_dashboardOrg(profileId, orgId)}/members`;
export const _dashboardOrgEvents = (profileId: string, orgId: string) => `${_dashboardOrg(profileId, orgId)}/events`;
export const _dashboardOrgRoles = (profileId: string, orgId: string) => `${_dashboardOrg(profileId, orgId)}/roles`;

export const _dashboardTickets = (profileId: string) => `${_dashboard(profileId)}/tickets`;
export const _dashboardProfile = (profileId: string) => `${_dashboard(profileId)}/profile`;
export const _dashboardNotifications = (profileId: string) => `${_dashboard(profileId)}/notifications`;
export const _dashboardSettings = (profileId: string) => `${_dashboard(profileId)}/settings`;

// company
export const _company = '/company';
export const _contactUs = '/contact-us';
export const _Terms = '/terms'; 
export const _privacy = '/privacy';