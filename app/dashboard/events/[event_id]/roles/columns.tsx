"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Role = {
  name: string,
  email: string,
  is_active: string,
  role: string
}

export const columns: ColumnDef<Role>[] = [
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
    header: "Payment Status",
  },
]
