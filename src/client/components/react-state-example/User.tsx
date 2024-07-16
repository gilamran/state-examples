import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import React from 'react';
import { IProject, IUser } from './ReactStateExampleRoot';

interface IProps {
  user: IUser;
  projects: IProject[];
  removeUser: (userId: number) => void;
  assignProjectToUser: (userId: number, projectId: number) => void;
  unassignProjectFromUser: (userId: number, projectId: number) => void;
}

export function User({ user, projects, removeUser, assignProjectToUser, unassignProjectFromUser }: IProps) {

  const assignedProjects = projects.filter((p) => !user.assignedProjects.includes(p.id));

  return (
    <Card elevation={5} sx={{ marginBottom: 5 }}>
      <CardHeader
        title={user.name}
        action={
          <IconButton onClick={() => removeUser(user.id)}>
            <ClearIcon />
          </IconButton>
        }
      />
      <CardContent>
        <h3>Assigned Projects:</h3>
        {user.assignedProjects.map((projectId) => {
          const project = projects.find((p) => p.id === projectId);
          return (
            <div>
              <span>{project.name} </span>
              <button onClick={() => unassignProjectFromUser(user.id, project.id)}>Unassign</button>
            </div>
          );
        })}
        <div>
          <span>Assign Project: </span>
          <select onChange={(e) => assignProjectToUser(user.id, Number(e.target.value))}>
            <option value=''>Select a project</option>
            {assignedProjects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
      </CardContent>
    </Card>
  );
}
