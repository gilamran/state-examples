import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import chance from 'chance';
import React from 'react';
import { useProjectsStore } from './AppStoresProvider';
import { IProject } from './stores/ProjectsStore';
import { TasksList } from './TasksList';
import { observer } from 'mobx-react';

const c = new chance.Chance();

interface IProps {
  project: IProject;
}

export const Project = observer(function Project({ project }: IProps) {
  const projectsStore = useProjectsStore();

  const handleAddTask = () => {
    project.tasks.addTask(`Fly to ${c.city()}`);
  };

  return (
    <Card elevation={5} sx={{ marginBottom: 5 }}>
      <CardHeader
        title={project.name}
        action={
          <IconButton onClick={() => projectsStore.removeProject(project.id)}>
            <ClearIcon />
          </IconButton>
        }
      />
      <CardContent>
        <TasksList tasksStore={project.tasks} />
        <button onClick={handleAddTask}>Add Task</button>
      </CardContent>
    </Card>
  );
});
