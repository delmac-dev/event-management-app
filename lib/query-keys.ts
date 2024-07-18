const publicKeys = {
    all: ['todos'] as const,
    lists: () => [...publicKeys.all, 'list'] as const,
    list: (filters: string) => [...publicKeys.lists(), { filters }] as const,
    details: () => [...publicKeys.all, 'detail'] as const,
    detail: (id: number) => [...publicKeys.details(), id] as const,
};

const dashboardKeys = {
    all: ['todos'] as const,
    lists: () => [...dashboardKeys.all, 'list'] as const,
    list: (filters: string) => [...dashboardKeys.lists(), { filters }] as const,
    details: () => [...dashboardKeys.all, 'detail'] as const,
    detail: (id: number) => [...dashboardKeys.details(), id] as const,
};