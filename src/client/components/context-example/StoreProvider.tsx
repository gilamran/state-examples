import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

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
  assignedProjects: number[];
}

export interface IStoreProviderContextData {
  users: IUser[];
  projects: IProject[];
  addUser: (name: string) => void;
  removeUser: (id: number) => void;
  addProject: (name: string) => void;
  removeProject: (projectId: number) => void;
  assignProjectToUser: (userId: number, projectId: number) => void;
  unassignProjectFromUser: (userId: number, projectId: number) => void;
  addTask: (projectId: number, todo: string) => void;
  toggleTaskCompletion: (projectId: number, taskId: number) => void;
}

export const StoreProviderContext = createContext<IStoreProviderContextData | null>(null);

export const useStore = (): IStoreProviderContextData => {
  const context = useContext(StoreProviderContext);
  if (!context) {
    throw new Error('Failed to retrieve StoreProviderContext.');
  }
  return context;
};

export const StoreProvider: React.FC<{ children: ReactNode }> = function StoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);

  // Users Actions
  const addUser = useCallback(
    (name: string) => {
      const user = { id: Math.random(), name, assignedProjects: [] };
      setUsers([...users, user]);
    },
    [users],
  );

  const removeUser = useCallback(
    (userId: number) => {
      const newUsers = users.filter((user) => user.id !== userId);
      setUsers(newUsers);
    },
    [users],
  );

  // Projects Actions
  const assignProjectToUser = useCallback(
    (userId: number, projectId: number) => {
      const newUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, assignedProjects: [...user.assignedProjects, projectId] };
        }
        return user;
      });
      setUsers(newUsers);
    },
    [users],
  );

  const unassignProjectFromUser = useCallback(
    (userId: number, projectId: number) => {
      const newUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, assignedProjects: user.assignedProjects.filter((id) => id !== projectId) };
        }
        return user;
      });
      setUsers(newUsers);
    },
    [users],
  );

  const addProject = useCallback(
    (name: string) => {
      const project = { id: Math.random(), name, tasks: [] };
      setProjects([...projects, project]);
    },
    [projects],
  );

  const removeProject = useCallback(
    (projectId: number) => {
      for (const user of users) {
        if (user.assignedProjects.includes(projectId)) {
          unassignProjectFromUser(user.id, projectId);
        }
      }

      const newProjects = projects.filter((project) => project.id !== projectId);
      setProjects(newProjects);
    },
    [projects, unassignProjectFromUser],
  );

  // Tasks Actions
  const addTask = useCallback(
    (projectId: number, todo: string) => {
      const newProjects = projects.map((project) => {
        if (project.id === projectId) {
          return { ...project, tasks: [...project.tasks, { id: Math.random(), todo, isCompleted: false }] };
        }
        return project;
      });
      setProjects(newProjects);
    },
    [projects],
  );

  const toggleTaskCompletion = useCallback(
    (projectId: number, taskId: number) => {
      const newProjects = projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
            ),
          };
        }
        return project;
      });
      setProjects(newProjects);
    },
    [projects],
  );

  const providerValues: IStoreProviderContextData = useMemo(() => {
    return {
      users,
      projects,
      addUser,
      removeUser,
      addProject,
      removeProject,
      assignProjectToUser,
      unassignProjectFromUser,
      addTask,
      toggleTaskCompletion,
    };
  }, [users, projects, addUser, removeUser, addProject, removeProject]);

  return <StoreProviderContext.Provider value={providerValues}>{children}</StoreProviderContext.Provider>;
};
