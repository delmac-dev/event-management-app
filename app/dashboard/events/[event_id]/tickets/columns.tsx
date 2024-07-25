"use client"

import { FetchedTicketsProps } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { TableCell } from "./table-cells"

export const columns: ColumnDef<FetchedTicketsProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "availability",
    header: "Availability",
  },
  {
    id: "total-tickets",
    header: "Tickets Left",
    cell: ({ row: { original }}) => (
      <TableCell type="total-tickets" data={original} />
    )
  },
  {
    accessorKey: "ticket_type",
    header: "Ticket Type",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row: { original }}) => (
      <TableCell type="action" data={original} />
    )
  },
]
