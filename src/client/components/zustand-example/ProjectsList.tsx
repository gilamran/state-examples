import React from 'react';
import { useStore } from './store/useStore';
import { Project } from './Project';
import chance from 'chance';

const c = new chance.Chance();

export function ProjectsList() {
  const projects = useStore((state) => state.projects);
  const addProject = useStore((state) => state.addProject);

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
