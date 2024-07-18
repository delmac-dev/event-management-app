"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Moderator = {
  full_name: string,
  email: string,
  is_active: string,
  role: string
}

export const columns: ColumnDef<Moderator>[] = [
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "is_active",
    header: "Status",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]
