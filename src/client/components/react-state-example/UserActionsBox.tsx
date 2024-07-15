import React from 'react';
import RemoveUserButton from './RemoveUserButton';
import { User } from './UsersList';

function UserActionsBox({ user, onRemoveUser }: { user: User; onRemoveUser: (userId: number) => void }) {
  return <RemoveUserButton user={user} onRemoveUser={onRemoveUser} />;
}

export default UserActionsBox;
