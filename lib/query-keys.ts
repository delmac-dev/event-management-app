
export const publicKeys = {
    all: ['public'] as const,
    events: (filters: any) => [...publicKeys.all, 'event', filters] as const,
    event: (id: number) => [...publicKeys.all, 'event', id] as const,
    attendees: (filters: any) => [...publicKeys.all, 'attendees', filters] as const,
    attendee: (id: number) => [...publicKeys.all, 'attendee', id] as const,
    tickets: (eventID: number) => [...publicKeys.all, 'tickets', eventID] as const,
};

export const dashboardKeys = {
    all: ['dashboard'] as const,
    profile: ['profile'] as const,
    authProfile: ['auth-profile'] as const,

    events: (filters: any) => [...dashboardKeys.all, 'event', filters] as const,
    event: (id: number) => [...dashboardKeys.all, 'event', id] as const,
    eventTickets: (filters: any, id: number) => [...dashboardKeys.event(id), 'event-tickets', filters] as const,
    eventTicket: (eventID: number, id: number) => [...dashboardKeys.event(id), 'event-ticket', eventID] as const,
    eventAttendees: (filters: any, id: number) => [...dashboardKeys.event(id), 'event-attendees', filters] as const,
    eventAttendee: (attendeeID: number, id: number) => [...dashboardKeys.event(id), 'event-attendee', attendeeID] as const,

    orgs: () => [...dashboardKeys.all, 'orgs'] as const,
    org: (id: string) => [...dashboardKeys.all, 'org', id] as const,
    orgEvents: (filters: any, id: string) => [...dashboardKeys.org(id), 'org-events', filters] as const,
    orgMembers: (filters: any, id: string) => [...dashboardKeys.org(id), 'org-members', filters] as const,
    orgMember: (memberID: number, id: string) => [...dashboardKeys.org(id), 'org-member', memberID] as const,

    tickets: (filters: any) => [...dashboardKeys.all, 'tickets', filters] as const,
};