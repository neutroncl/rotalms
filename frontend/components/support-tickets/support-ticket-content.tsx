import dateFormat from "dateformat"

import { SupportTicket, SupportTicketComment } from "@/types/support-ticket"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
} from "@/components/ui/message"

interface SupportTicketContentProps {
  ticket: SupportTicket
}

const getInitials = (author: SupportTicketComment["author"]) =>
  `${author.first_name.charAt(0)}${author.last_name.charAt(0)}`.toUpperCase()

const SupportTicketContent = ({ ticket }: SupportTicketContentProps) => {
  const comments = ticket.comments ?? []

  const groups: SupportTicketComment[][] = []
  for (const comment of comments) {
    const lastGroup = groups[groups.length - 1]
    if (lastGroup && lastGroup[0].author.id === comment.author.id) {
      lastGroup.push(comment)
    } else {
      groups.push([comment])
    }
  }

  if (groups.length === 0) {
    return <div className="text-sm text-muted-foreground">No comments yet.</div>
  }

  return (
    <div className="flex h-100 scrollbar-thin flex-col gap-4x overflow-y-auto">
      {groups.map((group) => {
        const isStaff = group[0].author.id === ticket.assignee?.id
        const align = isStaff ? "end" : "start"

        return (
          <MessageGroup key={group[0].id}>
            {group.map((comment, index) => {
              const isLast = index === group.length - 1

              return (
                <Message key={comment.id} align={align}>
                  <MessageAvatar>
                    {isLast && (
                      <Avatar className="size-7 bg-foreground">
                        <AvatarFallback className="bg-foreground text-background">
                          {getInitials(comment.author)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </MessageAvatar>
                  <MessageContent>
                    <Bubble variant={isStaff ? "muted" : "muted"}>
                      <BubbleContent className="whitespace-pre-line">
                        {comment.message}
                      </BubbleContent>
                    </Bubble>
                    <MessageFooter>
                      {isStaff
                        ? "You"
                        : `${comment.author.first_name} ${comment.author.last_name}`}{" "}
                      |{" "}
                      {dateFormat(comment.created_at, "mmmm dd, yyyy · hh:MM")}
                    </MessageFooter>
                  </MessageContent>
                </Message>
              )
            })}
          </MessageGroup>
        )
      })}
    </div>
  )
}

export default SupportTicketContent
