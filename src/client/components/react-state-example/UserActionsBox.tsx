import React from 'react';
import { RemoveUserButton } from './RemoveUserButton';
import { IUser } from './UsersList';

export function UserActionsBox({ user, onRemoveUser }: { user: IUser; onRemoveUser: (userId: number) => void }) {
  return <RemoveUserButton user={user} onRemoveUser={onRemoveUser} />;
}
