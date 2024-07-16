import React from 'react';
import { IUser } from './UsersList';

export function RemoveUserButton({ user, onRemoveUser }: { user: IUser; onRemoveUser: (userId: number) => void }) {
  return <button onClick={() => onRemoveUser(user.id)}>X</button>;
}
