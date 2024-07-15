import { observer } from 'mobx-react';
import React from 'react';
import { useUsersStore } from './AppStoresProvider';
import { User } from './stores/UsersStore';

export const RemoveUserButton = observer(({ user }: { user: User }) => {
  const usersStore = useUsersStore();

  return <button onClick={() => usersStore.removeUser(user.id)}>X</button>;
});

export default RemoveUserButton;
