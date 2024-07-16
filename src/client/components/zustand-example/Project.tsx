import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import chance from 'chance';
import React from 'react';
import { useStore, IProject as ProjectType } from './store/useStore';
import { TasksList } from './TasksList';
import ClearIcon from '@mui/icons-material/Clear';

const c = new chance.Chance();

interface IProps {
  project: ProjectType;
}

export function Project({ project }: IProps) {
  const removeProject = useStore((state) => state.removeProject);
  const addTask = useStore((state) => state.addTask);

  const handleAddTask = () => {
    addTask(project.id, `Fly to ${c.city()}`);
  };

  return (
    <Card elevation={5} sx={{ marginBottom: 5 }}>
      <CardHeader
        title={project.name}
        action={
          <IconButton onClick={() => removeProject(project.id)}>
            <ClearIcon />
          </IconButton>
        }
      />
      <CardContent>
        <TasksList tasks={project.tasks} projectId={project.id} />
        <button onClick={handleAddTask}>Add Task</button>
      </CardContent>
    </Card>
  );
}
