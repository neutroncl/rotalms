import { SupportTicketsTable } from "@/components/support-tickets/admin/datatable/table"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"
import { ListFilter, Search } from "lucide-react"
import { mockSupportTickets } from "@/data/mock/support-ticket"

const AdminSupportTicketsPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4x">
      <div
        id="section-heading"
        className="flex flex-col items-stretch gap-3x sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="text-lg font-medium">Support Tickets</span>

        <div className="flex min-w-0 items-center gap-2x">
          <InputGroup className="flex min-w-0 flex-1 bg-card p-4x sm:w-input-sm sm:flex-none">
            <InputGroupInput
              id="inline-end-input"
              placeholder="Ticket Search"
            />
            <InputGroupAddon align="inline-end">
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <Button
            className="shrink-0 rounded-full p-4x"
            size="icon-lg"
            variant="outline"
          >
            <ListFilter />
          </Button>
        </div>
      </div>

      <div id="content" className="min-w-0">
        <SupportTicketsTable data={mockSupportTickets} />
      </div>
    </div>
  )
}

export default AdminSupportTicketsPage
