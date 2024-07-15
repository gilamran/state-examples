import { useCallback, useState } from 'react';

import UserActionsBox from './UserActionsBox';
import React from 'react';
import chance from 'chance';

const c = new chance.Chance();

export interface User {
  id: number;
  name: string;
}

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = useCallback(
    async (userName: string) => {
      const user = { id: Math.random(), name: userName };
      setUsers([...users, user]);
    },
    [users],
  );

  const removeUser = useCallback(
    async (userId: number) => {
      const newUsers = users.filter((user) => user.id !== userId);
      setUsers(newUsers);
    },
    [users],
  );

  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <div key={user.id}>
              <span>{user.name}</span>
              <UserActionsBox user={user} onRemoveUser={removeUser} />
            </div>
          </>
        );
      })}
      <button onClick={() => addUser(c.name())}>Add User</button>
    </div>
  );
}

export default UsersList;
