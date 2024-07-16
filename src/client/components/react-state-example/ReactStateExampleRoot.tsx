import React, { useCallback, useState } from 'react';
import { UsersList } from './UsersList';
import { ProjectsList } from './ProjectsList';

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

export function ReactStateExampleRoot() {
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
          const newUsers = users.map((user) => ({
            ...user,
            assignedProjects: user.assignedProjects.filter((id) => id !== projectId),
          }));
          setUsers(newUsers);
        }
      }

      const newProjects = projects.filter((project) => project.id !== projectId);
      setProjects(newProjects);
    },
    [projects, users],
  );

  // Task Actions
  const addTask = useCallback(
    (projectId: number, todo: string) => {
      const newProjects = projects.map((project) => {
        if (project.id === projectId) {
          return { ...project, tasks: [...project.tasks, { id: Math.random(), isCompleted: false, todo }] };
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
            tasks: project.tasks.map((task) => {
              if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
              }
              return task;
            }),
          };
        }
        return project;
      });
      setProjects(newProjects);
    },
    [projects],
  );

  return (
    <div style={{ display: 'flex', gap: 120 }}>
      <UsersList
        users={users}
        projects={projects}
        addUser={addUser}
        removeUser={removeUser}
        assignProjectToUser={assignProjectToUser}
        unassignProjectFromUser={unassignProjectFromUser}
      />
      <ProjectsList
        addProject={addProject}
        removeProject={removeProject}
        addTask={addTask}
        toggleTaskCompletion={toggleTaskCompletion}
        projects={projects}
      />
    </div>
  );
}
