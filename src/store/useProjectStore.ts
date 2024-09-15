import { create } from "zustand";
import { Project, ProjectStore } from "./interfaces/project-store.interface";

export const useProject = create<ProjectStore>((set) => ({
  projects: [],
  setProjects: (projects: Project[]) => set(() => ({ projects })),
  clearProjects: () => set(() => ({ projects: [] })),
}));
