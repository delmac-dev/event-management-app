"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Ticket = {
    name: string,
    availability: string,
    total_tickets: string,
    ticket_type: string,
    price: string
}

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "availability",
    header: "Availability",
  },
  {
    accessorKey: "total_tickets",
    header: "Total Tickets",
  },
  {
    accessorKey: "ticket_type",
    header: "Ticket Type",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
]
