import React from 'react';
import { User, useUsers } from './UsersProvider';

function RemoveUserButton({ user }: { user: User }) {
  const { removeUser } = useUsers();

  return <button onClick={() => removeUser(user.id)}>X</button>;
}

export default RemoveUserButton;
