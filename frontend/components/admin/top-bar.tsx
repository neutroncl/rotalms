import React from "react"
import { Button } from "../ui/button"
import { Bell, Search, Settings, TextAlignStart } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

const AdminTopBar = () => {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <Button
          className="shrink-0 rounded-full p-4x"
          size="icon-xl"
          variant="outline"
        >
          <TextAlignStart />
        </Button>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-xl leading-none sm:text-2xl">
            Hello Mehul 👋
          </span>
          <span className="truncate text-xs text-muted-foreground">
            Let&apos;s learn something new today!
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
        <InputGroup className="flex w-[20rem] bg-card p-6">
          <InputGroupInput
            id="inline-end-input"
            placeholder="Search from courses..."
          />

          <InputGroupAddon align="inline-end">
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <Button
          className="shrink-0 rounded-full p-4x"
          size="icon-xl"
          variant="outline"
        >
          <Bell />
        </Button>
        <Button
          className="shrink-0 rounded-full p-4x"
          size="icon-xl"
          variant="outline"
        >
          <Settings />
        </Button>
      </div>
    </div>
  )
}

export default AdminTopBar
