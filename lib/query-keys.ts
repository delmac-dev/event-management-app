
export const publicKeys = {
    all: ['public'] as const,
    events: () => [...publicKeys.all, 'event'] as const,
    event: (id: number) => [...publicKeys.all, 'event', id] as const,
    attendees: (filters: any) => [...publicKeys.all, 'attendees', filters] as const,
    attendee: (id: number) => [...publicKeys.all, 'attendee', id] as const,
    tickets: (eventID: number) => [...publicKeys.all, 'tickets', eventID] as const,
};

export const dashboardKeys = {
    all: ['dashboard'] as const,
    profile: ['profile'] as const,
    authProfile: ['auth-profile'] as const,

    userOrgSelectList: () => [...dashboardKeys.all, 'org', 'select', 'list'] as const, 
    eventTicketSelect: (id: string) => [...dashboardKeys.all, id, 'ticket', 'select', 'list'] as const, 

    events: () => [...dashboardKeys.all, 'events'] as const,
    event: (id: string) => [...dashboardKeys.all, 'events', id] as const,
    eventTickets: (id: string) => [...dashboardKeys.event(id), 'event-tickets'] as const,
    eventTicket: (eventID: string, id: string) => [...dashboardKeys.event(id), 'event-ticket', eventID] as const,
    eventAttendees: (id: string) => [...dashboardKeys.event(id), 'event-attendees'] as const,
    eventAttendee: (attendeeID: string, id: string) => [...dashboardKeys.event(id), 'event-attendee', attendeeID] as const,

    orgs: () => [...dashboardKeys.all, 'orgs'] as const,
    org: (id: string) => [...dashboardKeys.all, 'org', id] as const,
    orgEvents: ( id: string) => [...dashboardKeys.org(id), 'org-events'] as const,
    orgMembers: ( id: string) => [...dashboardKeys.org(id), 'org-members'] as const,
    orgMember: (memberID: string, id: string) => [...dashboardKeys.org(id), 'org-member', memberID] as const,

    tickets: () => [...dashboardKeys.all, 'tickets'] as const,
};