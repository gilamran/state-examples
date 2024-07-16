import React from 'react';
import { StoresProvider } from './AppStoresProvider';
import { UsersList } from './UsersList';
import { ProjectsList } from './ProjectsList';

export function MobxExampleRoot() {
  return (
    <StoresProvider>
      <div style={{ display: 'flex', gap: 120 }}>
        <UsersList />
        <ProjectsList />
      </div>
    </StoresProvider>
  );
}
