"use client"

import { FetchedAttendeeProps } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { TableCell } from "./table-cells"

export const columns: ColumnDef<FetchedAttendeeProps>[] = [
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
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row: { original }}) => (
      <TableCell type="action" data={original} />
    )
  },
]
