import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import chance from 'chance';
import React from 'react';
import { IProject } from './ReactStateExampleRoot';
import { TasksList } from './TasksList';

const c = new chance.Chance();

interface IProps {
  project: IProject;
  removeProject: (projectId: number) => void;
  addTask: (projectId: number, todo: string) => void;
  toggleTaskCompletion: (projectId: number, taskId: number) => void;
}

export function Project({ project, removeProject, addTask, toggleTaskCompletion }: IProps) {
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
        <TasksList tasks={project.tasks} projectId={project.id} toggleTaskCompletion={toggleTaskCompletion} />
        <button onClick={handleAddTask}>Add Task</button>
      </CardContent>
    </Card>
  );
}
