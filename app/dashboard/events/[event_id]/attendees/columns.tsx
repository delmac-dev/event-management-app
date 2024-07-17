"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Attendee = {
  full_name: string,
  email: string,
  ticket_code: string,
  status: string,
  payment_status: string
}

export const columns: ColumnDef<Attendee>[] = [
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "ticket_code",
    header: "Ticket Code",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "payment_status",
    header: "Payment Status",
  },
]
