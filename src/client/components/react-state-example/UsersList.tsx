import { useCallback, useState } from 'react';

import { UserActionsBox } from './UserActionsBox';
import React from 'react';
import chance from 'chance';
import { Button } from '@mui/material';

const c = new chance.Chance();

export interface IUser {
  id: number;
  name: string;
}

export function UsersList() {
  const [users, setUsers] = useState<IUser[]>([]);

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
      <Button variant='contained' onClick={() => addUser(c.name())}>
        Add User
      </Button>
      <hr />
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
    </div>
  );
}
