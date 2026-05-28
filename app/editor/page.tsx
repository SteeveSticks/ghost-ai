"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { EditorNavbar } from "@/component/editor/editor-navbar";
import { ProjectSidebar } from "@/component/editor/project-sidebar";
import { useProjectDialogs } from "@/hooks/use-project-dialogs";

export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const {
    myProjects,
    sharedProjects,
    dialogState,
    activeProject,
    formName,
    setFormName,
    projectSlug,
    isSaving,
    openCreateDialog,
    openRenameDialog,
    openDeleteDialog,
    closeDialog,
    createProject,
    renameProject,
    deleteProject,
  } = useProjectDialogs();

  const canSubmitCreate = formName.trim().length > 0;
  const canSubmitRename =
    formName.trim().length > 0 && activeProject !== null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        myProjects={myProjects}
        sharedProjects={sharedProjects}
        onCreate={openCreateDialog}
        onRename={openRenameDialog}
        onDelete={openDeleteDialog}
      />

      <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-4xl flex-col items-center justify-center px-4 py-10 text-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">
              Create a project or open an existing one.
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Start a new architecture workspace, or choose a project
              from the sidebar.
            </p>
          </div>

          <Button
            type="button"
            className="mx-auto gap-2"
            onClick={openCreateDialog}
          >
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </main>

      <Dialog
        open={dialogState === "create"}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create project</DialogTitle>
            <DialogDescription>
              Add a new project and preview its slug as you type.
            </DialogDescription>
          </DialogHeader>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              createProject(formName);
            }}
          >
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                htmlFor="create-project-name"
              >
                Project name
              </label>
              <Input
                id="create-project-name"
                value={formName}
                onChange={(event) => setFormName(event.target.value)}
                placeholder="Product roadmap"
                className="text-white"
              />
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mt-1 break-all">{projectSlug}</p>
            </div>

            <DialogFooter className="justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={closeDialog}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!canSubmitCreate || isSaving}
              >
                {isSaving ? "Creating..." : "Create project"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={dialogState === "rename"}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename project</DialogTitle>
            <DialogDescription>
              Rename {activeProject?.name} and update the project
              title.
            </DialogDescription>
          </DialogHeader>

          <form
            className="space-y-2"
            onSubmit={(event) => {
              event.preventDefault();
              renameProject(formName);
            }}
          >
            <div className="space-y-2">
              <label
                className="block text-sm font-medium"
                htmlFor="rename-project-name"
              >
                Project name
              </label>
              <Input
                id="rename-project-name"
                autoFocus
                value={formName}
                onChange={(event) => setFormName(event.target.value)}
                placeholder="Update project name"
              />
            </div>

            <DialogFooter className="justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={closeDialog}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!canSubmitRename || isSaving}
              >
                {isSaving ? "Saving..." : "Rename project"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={dialogState === "delete"}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete project</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {activeProject?.name}?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={closeDialog}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={deleteProject}
              disabled={isSaving}
            >
              {isSaving ? "Deleting..." : "Delete project"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
