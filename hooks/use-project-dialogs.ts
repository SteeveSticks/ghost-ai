"use client";

import * as React from "react";

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  owner: "me" | "shared";
};

export type ProjectDialogState = "closed" | "create" | "rename" | "delete";

const initialMyProjects: ProjectItem[] = [
  {
    id: "project-1",
    name: "Ghost Studio",
    description: "A workspace for product architecture and launch planning.",
    owner: "me",
  },
  {
    id: "project-2",
    name: "Launch Plan",
    description: "Track milestones, goals, and architecture decisions.",
    owner: "me",
  },
];

const initialSharedProjects: ProjectItem[] = [
  {
    id: "shared-1",
    name: "Brand Review",
    description: "Collaborator access for creative feedback.",
    owner: "shared",
  },
];

function createSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "") || "untitled-project";
}

export function useProjectDialogs() {
  const [myProjects, setMyProjects] = React.useState<ProjectItem[]>(
    initialMyProjects
  );
  const [sharedProjects] = React.useState<ProjectItem[]>(initialSharedProjects);
  const [dialogState, setDialogState] = React.useState<ProjectDialogState>(
    "closed"
  );
  const [activeProject, setActiveProject] = React.useState<ProjectItem | null>(
    null
  );
  const [formName, setFormName] = React.useState("");
  const [isSaving, setIsSaving] = React.useState(false);

  const projectSlug = React.useMemo(() => createSlug(formName), [formName]);

  const closeDialog = React.useCallback(() => {
    setDialogState("closed");
    setActiveProject(null);
    setFormName("");
    setIsSaving(false);
  }, []);

  const openCreateDialog = React.useCallback(() => {
    setFormName("");
    setActiveProject(null);
    setDialogState("create");
  }, []);

  const openRenameDialog = React.useCallback((project: ProjectItem) => {
    setFormName(project.name);
    setActiveProject(project);
    setDialogState("rename");
  }, []);

  const openDeleteDialog = React.useCallback((project: ProjectItem) => {
    setActiveProject(project);
    setDialogState("delete");
  }, []);

  const createProject = React.useCallback(
    (name: string) => {
      const trimmedName = name.trim();
      if (!trimmedName) return;

      setIsSaving(true);
      window.setTimeout(() => {
        setMyProjects((current) => [
          ...current,
          {
            id: `project-${current.length + 1}`,
            name: trimmedName,
            description: "New project created in the workspace.",
            owner: "me",
          },
        ]);
        closeDialog();
      }, 200);
    },
    [closeDialog]
  );

  const renameProject = React.useCallback(
    (name: string) => {
      const trimmedName = name.trim();
      if (!trimmedName || !activeProject) return;

      setIsSaving(true);
      window.setTimeout(() => {
        setMyProjects((current) =>
          current.map((project) =>
            project.id === activeProject.id
              ? { ...project, name: trimmedName }
              : project
          )
        );
        closeDialog();
      }, 200);
    },
    [activeProject, closeDialog]
  );

  const deleteProject = React.useCallback(() => {
    if (!activeProject) return;

    setIsSaving(true);
    window.setTimeout(() => {
      setMyProjects((current) =>
        current.filter((project) => project.id !== activeProject.id)
      );
      closeDialog();
    }, 200);
  }, [activeProject, closeDialog]);

  return {
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
  };
}
