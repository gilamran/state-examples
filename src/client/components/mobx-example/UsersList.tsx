import chance from 'chance';
import { observer } from 'mobx-react';
import React from 'react';
import { useUsersStore } from './AppStoresProvider';
import { User } from './User';

const c = new chance.Chance();
export const UsersList = observer(function UsersList() {
  const { users, addUser } = useUsersStore();

  const handleAddUser = () => {
    addUser(c.name());
  };

  return (
    <div>
      <h1>
        Users <button onClick={handleAddUser}>+</button>
      </h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
});
