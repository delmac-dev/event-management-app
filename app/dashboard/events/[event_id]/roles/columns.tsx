"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Role = {
  role: string,
  is_active: string,
  permissions: string
}

export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "role",
    header: "Full Name",
  },
  {
    accessorKey: "is_active",
    header: "Status",
  },
  {
    accessorKey: "permissions",
    header: "Permissions",
  },
]
