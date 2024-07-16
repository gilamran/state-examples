import React from 'react';
import { UserActionsBox } from './UserActionsBox';
import { useUsers } from './UsersProvider';
import chance from 'chance';
import { Button } from '@mui/material';

const c = new chance.Chance();

export function UsersList() {
  const { users, addUser } = useUsers();

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
              <UserActionsBox user={user} />
            </div>
          </>
        );
      })}
    </div>
  );
}
