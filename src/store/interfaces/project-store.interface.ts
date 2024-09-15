export interface ProjectState {
  projects: Project[];
}

export interface ProjectStore extends ProjectState {
  setProjects: (arg: Project[]) => void;
  clearProjects: () => void;
}

export interface Project {
  id: number;
  simpleId: string;
  name: string;
  description: string;
  active: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
