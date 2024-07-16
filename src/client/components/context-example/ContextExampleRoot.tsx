import React from 'react';
import { UsersList } from './UsersList';
import { StoreProvider } from './StoreProvider';
import { ProjectsList } from './ProjectsList';

export function ContextExampleRoot() {
  return (
    <StoreProvider>
      <h1>
        <u>State in Context</u>
      </h1>
      <div style={{ display: 'flex', gap: 120 }}>
        <UsersList />
        <ProjectsList />
      </div>
    </StoreProvider>
  );
}
