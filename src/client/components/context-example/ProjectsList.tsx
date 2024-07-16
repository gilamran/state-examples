import React from 'react';
import chance from 'chance';
import { useStore } from './StoreProvider';
import { Project } from './Project';

const c = new chance.Chance();

export function ProjectsList() {
  const { projects, addProject } = useStore();

  const handleAddProject = () => {
    addProject(c.company());
  };

  return (
    <div>
      <h1>
        Projects <button onClick={handleAddProject}>+</button>
      </h1>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
