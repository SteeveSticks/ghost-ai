"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Plus, X } from "lucide-react";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({
  isOpen,
  onClose,
}: ProjectSidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed left-0 top-0 z-40 flex h-full w-[min(22rem,100vw)] flex-col border-r border-border bg-card shadow-2xl shadow-black/40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <div className="text-sm font-semibold">Projects</div>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={onClose}
            aria-label="Close projects sidebar"
          >
            <X className="size-4" />
          </Button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-4 py-4">
          <Tabs defaultValue="my-projects" className="flex-1">
            <TabsList>
              <TabsTrigger value="my-projects">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="mt-4 flex-1">
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background/30 p-6 text-sm text-muted-foreground">
                <p>No projects yet.</p>
              </div>
            </TabsContent>

            <TabsContent value="shared" className="mt-4 flex-1">
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background/30 p-6 text-sm text-muted-foreground">
                <p>No shared projects yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-border px-4 py-4">
          <Button
            className="w-full justify-center gap-2"
            type="button"
          >
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
