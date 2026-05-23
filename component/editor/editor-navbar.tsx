"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          type="button"
          onClick={onToggleSidebar}
          aria-label={
            isSidebarOpen
              ? "Close project sidebar"
              : "Open project sidebar"
          }
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="size-4" />
          ) : (
            <PanelLeftOpen className="size-4" />
          )}
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2" />
    </header>
  );
}
