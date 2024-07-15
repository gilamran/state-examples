import React from 'react';
import { User } from './UsersList';

function RemoveUserButton({ user, onRemoveUser }: { user: User; onRemoveUser: (userId: number) => void }) {
  return <button onClick={() => onRemoveUser(user.id)}>X</button>;
}

export default RemoveUserButton;
