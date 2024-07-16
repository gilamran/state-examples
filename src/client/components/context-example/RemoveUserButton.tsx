import React from 'react';
import { IUser, useUsers } from './UsersProvider';

export function RemoveUserButton({ user }: { user: IUser }) {
  const { removeUser } = useUsers();

  return <button onClick={() => removeUser(user.id)}>X</button>;
}
