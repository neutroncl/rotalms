import { Activity, FileText, Flag, Hash, Tag } from "lucide-react"

import { SupportTicket } from "@/types/support-ticket"
import { IconBadge } from "@/components/ui/icon-badge"
import { PRIORITY_CONFIG, TICKET_STATUS_CONFIG } from "./config"
import SupportTicketHeaderCard from "./support-ticket-header-card"

interface SupportTicketHeaderProps {
  ticket: SupportTicket
}

const SupportTicketHeader = ({ ticket }: SupportTicketHeaderProps) => {
  return (
    <div className="flex flex-col gap-4x">
      <div id="header">
        <span className="text-lg">Support Tickets</span>
      </div>

      <div
        id="ticket-details"
        className="grid grid-cols-3 grid-rows-2 gap-4x rounded-xl bg-muted p-4x"
      >
        <SupportTicketHeaderCard
          title="Ticket ID"
          icon={Hash}
          content={ticket.id}
        />
        <SupportTicketHeaderCard
          title="Category"
          icon={Tag}
          content={ticket.category}
        />
        <SupportTicketHeaderCard
          title="Priority"
          icon={Flag}
          content={
            ticket.priority ? (
              <IconBadge {...PRIORITY_CONFIG[ticket.priority]} />
            ) : null
          }
          className="gap-1x"
        />
        <SupportTicketHeaderCard
          title="Subject"
          icon={FileText}
          content={ticket.subject}
          className="col-span-2"
        />
        <SupportTicketHeaderCard
          title="Status"
          icon={Activity}
          content={
            ticket.status ? (
              <IconBadge {...TICKET_STATUS_CONFIG[ticket.status]} />
            ) : null
          }
          className="gap-1x"
        />
      </div>
    </div>
  )
}

export default SupportTicketHeader
