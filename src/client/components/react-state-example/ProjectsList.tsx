import chance from 'chance';
import React from 'react';
import { IProject } from './ReactStateExampleRoot';
import { Project } from './Project';

const c = new chance.Chance();

interface IProps {
  projects: IProject[];
  addProject: (name: string) => void;
  removeProject: (projectId: number) => void;
  addTask: (projectId: number, todo: string) => void;
  toggleTaskCompletion: (projectId: number, taskId: number) => void;
}

export function ProjectsList({
  addProject,
  removeProject,
  addTask,
  toggleTaskCompletion,
  projects,
}: IProps) {
  const handleAddProject = () => {
    addProject(c.company());
  };

  return (
    <div>
      <h1>
        Projects <button onClick={handleAddProject}>+</button>
      </h1>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          removeProject={removeProject}
          addTask={addTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
}
