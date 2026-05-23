"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DialogPattern } from "@/component/editor/dialog-pattern";
import { EditorNavbar } from "@/component/editor/editor-navbar";
import { ProjectSidebar } from "@/component/editor/project-sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <section className="rounded-3xl border border-border bg-surface p-6">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold">
                  Editor Chrome Shell
                </h1>
                <p className="text-sm text-muted-foreground">
                  The navbar and floating sidebar are implemented as
                  reusable editor chrome components.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-surface p-6">
              <DialogPattern
                title="Dialog Pattern"
                description="A static dialog shell using the existing global color tokens and footer actions."
                footer={<Button variant="secondary">Confirm</Button>}
              >
                <p className="text-sm text-muted-foreground">
                  This pattern supports a title, description, body
                  content, and footer actions without creating an
                  interactive dialog yet.
                </p>
              </DialogPattern>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
