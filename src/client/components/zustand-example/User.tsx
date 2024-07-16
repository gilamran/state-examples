import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import React from 'react';
import { useStore, IUser as UserType } from './store/useStore';

interface IProps {
  user: UserType;
}

export function User({ user }: IProps) {
  const removeUser = useStore((state) => state.removeUser);
  const projects = useStore((state) => state.projects);
  const assignProjectToUser = useStore((state) => state.assignProjectToUser);
  const unassignProjectFromUser = useStore((state) => state.unassignProjectFromUser);

  const assignedProjects = projects.filter((p) => !user.projects.includes(p.id));

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
        {user.projects.map((projectId) => {
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
