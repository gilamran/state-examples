import React from 'react';
import { ProjectsList } from './ProjectsList';
import { UsersList } from './UsersList';

export function ZustandExampleRoot() {
  return (
    <div style={{ display: 'flex', gap: 120 }}>
      <UsersList />
      <ProjectsList />
    </div>
  );
}
