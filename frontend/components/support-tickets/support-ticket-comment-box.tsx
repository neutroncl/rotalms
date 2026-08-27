"use client"

import { SupportTicket } from "@/types/support-ticket"
import React, { useState } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group"
import { Button } from "../ui/button"
import { ArrowUp, Paperclip, ReplyAll, Settings2, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SupportTicketCommentBoxProps {
  ticket: SupportTicket
}

const SupportTicketCommentBox = ({ ticket }: SupportTicketCommentBoxProps) => {
  const [showSuggestion, setShowSuggestion] = useState(true)

  return (
    <div id={ticket.id}>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          showSuggestion
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id="suggestions"
            className="flex w-full items-center justify-between gap-2x rounded-t-lg bg-foreground/5 px-4x py-1x text-xs transition-colors hover:cursor-pointer hover:bg-foreground/10"
          >
            <div className="flex items-center gap-2x">
              <ReplyAll className="size-3 rotate-y-180" />

              <span className="text-xs">TODO</span>
            </div>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => setShowSuggestion(false)}
            >
              <X />
            </Button>
          </div>
        </div>
      </div>

      <InputGroup
        className={cn(
          "rounded-b-lg",
          showSuggestion ? "rounded-t-none border-t-0" : "rounded-t-lg"
        )}
      >
        <InputGroupInput
          placeholder="Add a comment..."
          className="max-h-32 min-h-12"
        />
        <InputGroupAddon align="block-end" className="pt-1">
          <div className="flex w-full items-center justify-between gap-2x">
            <div className="flex items-center gap-2x">
              <InputGroupButton
                size="icon-xs"
                variant="ghost"
                className="rounded-full"
              >
                <Paperclip />
              </InputGroupButton>
              <InputGroupButton
                size="icon-xs"
                variant="ghost"
                className="rounded-full"
              >
                <Settings2 />
              </InputGroupButton>
            </div>
            <InputGroupButton
              size="icon-sm"
              variant="default"
              className="rounded-full"
            >
              <ArrowUp />
            </InputGroupButton>
            <span className="sr-only">Send</span>
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default SupportTicketCommentBox
