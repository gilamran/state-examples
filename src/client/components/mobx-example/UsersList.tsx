import React from 'react';
import { useUsersStore } from './AppStoresProvider';
import UserActionsBox from './UserActionsBox';
import { observer } from 'mobx-react';
import chance from 'chance';

const c = new chance.Chance();
export const UsersList = observer(function UsersList() {
  const usersStore = useUsersStore();

  return (
    <div>
      {usersStore.users.map((user) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
            <UserActionsBox user={user} />
          </div>
        );
      })}
      <button onClick={() => usersStore.addUser(c.name())}>Add User</button>
    </div>
  );
});

export default UsersList;
