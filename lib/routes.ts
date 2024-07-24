
// auth
export const _login = '/auth/login';

// public
export const _home = '/';
export const _events = '/events';
export const _about = '/about';
export const _cookies = '/cookies';
export const _pricing = '/pricing';
export const _termsandconditions = '/terms-conditions';
export const _event = (slug: string) => `${_events}/${slug}`;
export const _attendEvent = (slug: string) => `${_event(slug)}/attend`;
export const _organisations = '/organisations';
export const _organisation = (slug: string) => `${_organisations}/${slug}`;
export const _tickets = '/tickets';
export const _ticket = (ticketCode: string) => `${_tickets}/${ticketCode}`;

// private
export const _dashboard = `/dashboard`;

export const _dashboardEvents = `${_dashboard}/events`;
export const _dashboardEvent = (eventId: string) => `${_dashboardEvents}/${eventId}`;
export const _dashboardEventEdit = (eventId: string) => `${_dashboardEvent(eventId)}/edit`;
export const _dashboardEventAttendees = (eventId: string) => `${_dashboardEvent(eventId)}/attendees`;
export const _dashboardEventTickets = (eventId: string) => `${_dashboardEvent(eventId)}/tickets`;

export const _dashboardOrgs = `${_dashboard}/organisations`;
export const _dashboardOrg = (orgId: string) => `${_dashboardOrgs}/${orgId}`;
export const _dashboardOrgEdit = (orgId: string) => `${_dashboardOrg(orgId)}/edit`;
export const _dashboardOrgMembers = (orgId: string) => `${_dashboardOrg(orgId)}/members`;
export const _dashboardOrgEvents = (orgId: string) => `${_dashboardOrg(orgId)}/events`;

export const _dashboardTickets = `${_dashboard}/tickets`;

export const _dashboardProfile = `${_dashboard}/profile`;
export const _dashboardProfileEdit = `${_dashboardProfile}/edit`;
export const _dashboardNotifications = `${_dashboardProfile}/notifications`;

// company
export const _company = '/company';
export const _contactUs = '/contact-us';
export const _terms = '/terms'; 
export const _privacy = '/privacy';