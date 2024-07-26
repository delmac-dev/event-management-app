"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TableCell } from "./table-cells"
import { FetchedMembersProps } from "@/lib/types"

export const columns: ColumnDef<FetchedMembersProps>[] = [
  {
    id: "full_name",
    header: "Full Name",
    cell: ({ row: { original } }) => (
      <TableCell type="full_name" data={original} />
    ),
  },
  {
    id: "email",
    header: "Email",
    cell: ({ row: { original } }) => (
      <TableCell type="email" data={original} />
    ),
  },
  {
    id: "is_active",
    header: "Status",
    cell: ({ row: { original }}) => (
      <TableCell type="status" data={original} />
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row: { original }}) => (
      <TableCell type="action" data={original} />
    )
  },
]
