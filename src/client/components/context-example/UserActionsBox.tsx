import React from 'react';
import { RemoveUserButton } from './RemoveUserButton';
import { IUser } from './UsersProvider';

export function UserActionsBox({ user }: { user: IUser }) {
  return <RemoveUserButton user={user} />;
}
