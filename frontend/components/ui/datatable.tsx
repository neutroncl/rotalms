"use client"

import {
  useTable,
  type ColumnDef,
  type RowData,
  type TableFeatures,
  type TableOptions,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

interface DataTableProps<
  TFeatures extends TableFeatures,
  TData extends RowData,
> {
  features: TFeatures
  columns: ColumnDef<TFeatures, TData>[]
  data: TData[]
  alternateRowColours?: boolean
  isLoading?: boolean
}

export function DataTable<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({
  features,
  columns,
  data,
  alternateRowColours = true,
}: DataTableProps<TFeatures, TData>) {
  const table = useTable({
    features,
    data,
    columns,
  } as unknown as TableOptions<TFeatures, TData>)

  return (
    <div className="overflow-x-auto rounded-xl border">
      <Table className="min-w-[50rem]">
        <TableHeader className="bg-muted text-xs">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="tracking-tight text-muted-foreground"
                  >
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                className={cn(
                  "",
                  alternateRowColours
                    ? index % 2 == 0
                      ? ""
                      : "bg-muted/80"
                    : ""
                )}
              >
                {row.getAllCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
