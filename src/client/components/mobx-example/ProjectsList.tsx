import chance from 'chance';
import React from 'react';
import { useProjectsStore } from './AppStoresProvider';
import { observer } from 'mobx-react';
import { Project } from './Project';

const c = new chance.Chance();

export const ProjectsList = observer(function ProjectsList() {

  const projectsStore = useProjectsStore();

  const handleAddProject = () => {
    projectsStore.addProject(c.company());
  };

  return (
    <div>
      <h1>
        Projects <button onClick={handleAddProject}>+</button>
      </h1>
      {projectsStore.projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
});
