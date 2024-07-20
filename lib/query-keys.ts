
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
    eventModeraters: (filters: any, id: number) => [...dashboardKeys.event(id), 'event-moderators', filters] as const,
    eventModerater: (moderatorID: number, id: number) => [...dashboardKeys.event(id), 'event-moderator', moderatorID] as const,
    eventRoles: (filters: any, id: number) => [...dashboardKeys.event(id), 'event-roles', filters] as const,
    eventRole: (roleID: number, id: number) => [...dashboardKeys.event(id), 'event-role', roleID] as const,

    orgs: (filters: any) => [...dashboardKeys.all, 'orgs', filters] as const,
    org: (id: number) => [...dashboardKeys.all, 'orgs', id] as const,
    orgEvents: (filters: any, id: number) => [...dashboardKeys.org(id), 'org-events', filters] as const,
    orgMembers: (filters: any, id: number) => [...dashboardKeys.org(id), 'org-members', filters] as const,
    orgMember: (memberID: number, id: number) => [...dashboardKeys.org(id), 'org-member', memberID] as const,
    orgRoles: (filters: any, id: number) => [...dashboardKeys.org(id), 'org-roles', filters] as const,
    orgRole: (roleID: number, id: number) => [...dashboardKeys.org(id), 'org-role', roleID] as const,

    tickets: (filters: any) => [...dashboardKeys.all, 'tickets', filters] as const,
};