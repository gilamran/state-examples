import React from 'react';
import UserActionsBox from './UserActionsBox';
import { useUsers } from './UsersProvider';
import chance from 'chance';

const c = new chance.Chance();

function UsersList() {
  const { users, addUser } = useUsers();

  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <div key={user.id}>
              <span>{user.name}</span>
              <UserActionsBox user={user} />
            </div>
          </>
        );
      })}
      <button onClick={() => addUser(c.name())}>Add User</button>
    </div>
  );
}

export default UsersList;
