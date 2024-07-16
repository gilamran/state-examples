import React from 'react';
import { ProjectsList } from './ProjectsList';
import { UsersList } from './UsersList';

export function ZustandExampleRoot() {
  return (
    <>
      <h1>
        <u>State in Zustand</u>
      </h1>
      <div style={{ display: 'flex', gap: 120 }}>
        <UsersList />
        <ProjectsList />
      </div>
    </>
  );
}
