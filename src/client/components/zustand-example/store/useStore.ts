import create from 'zustand';

export interface ITask {
  id: number;
  isCompleted: boolean;
  todo: string;
}

export interface IProject {
  id: number;
  name: string;
  tasks: ITask[];
}

export interface IUser {
  id: number;
  name: string;
  projects: number[];
}

interface StoreState {
  users: IUser[];
  projects: IProject[];
  addUser: (name: string) => void;
  removeUser: (userId: number) => void;
  addProject: (name: string) => void;
  removeProject: (projectId: number) => void;
  assignProjectToUser: (userId: number, projectId: number) => void;
  unassignProjectFromUser: (userId: number, projectId: number) => void;
  addTask: (projectId: number, todo: string) => void;
  removeTask: (projectId: number, taskId: number) => void;
  toggleTaskCompletion: (projectId: number, taskId: number) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  users: [],
  projects: [],
  addUser: (name) =>
    set((state) => ({
      users: [...state.users, { id: Math.random(), name, projects: [] }],
    })),
  removeUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
  addProject: (name) =>
    set((state) => ({
      projects: [...state.projects, { id: Math.random(), name, tasks: [] }],
    })),
  removeProject: (projectId) => {
    for (const user of get().users) {
      if (user.projects.includes(projectId)) {
        useStore.getState().unassignProjectFromUser(user.id, projectId);
      }
    }
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== projectId),
    }));
  },
  assignProjectToUser: (userId, projectId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, projects: [...user.projects, projectId] } : user,
      ),
    })),
  unassignProjectFromUser: (userId, projectId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, projects: user.projects.filter((id) => id !== projectId) } : user,
      ),
    })),
  addTask: (projectId, todo: string) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, { id: Math.random(), todo, isCompleted: false }] }
          : project,
      ),
    })),
  removeTask: (projectId, taskId) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project,
      ),
    })),
  toggleTaskCompletion: (projectId, taskId) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
              ),
            }
          : project,
      ),
    })),
}));
