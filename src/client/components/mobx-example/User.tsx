import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { useProjectsStore, useUsersStore } from './AppStoresProvider';
import { UserStore } from './stores/UserStore';

interface IProps {
  user: UserStore;
}

export const User = observer(function User({ user }: IProps) {
  const usersStore = useUsersStore();
  const projectsStore = useProjectsStore();

  const assignedProjects = projectsStore.projects.filter((p) => !user.assignedProjects.includes(p.id));

  return (
    <Card elevation={5} sx={{ marginBottom: 5 }}>
      <CardHeader
        title={user.name}
        action={
          <IconButton onClick={() => usersStore.removeUser(user.id)}>
            <ClearIcon />
          </IconButton>
        }
      />
      <CardContent>
        <h3>Assigned Projects:</h3>
        {user.assignedProjects.map((projectId) => {
          const project = projectsStore.projects.find((p) => p.id === projectId);
          return (
            <div>
              <span>{project.name} </span>
              <button onClick={() => user.unassignProject(project.id)}>Unassign</button>
            </div>
          );
        })}
        <div>
          <span>Assign Project: </span>
          <select onChange={(e) => user.assignProject(Number(e.target.value))}>
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
});
