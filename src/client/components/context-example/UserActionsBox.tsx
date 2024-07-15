import React from 'react';
import RemoveUserButton from './RemoveUserButton';
import { User } from './UsersProvider';

function UserActionsBox({ user }: { user: User }) {
  return <RemoveUserButton user={user} />;
}

export default UserActionsBox;
