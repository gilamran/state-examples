import chance from 'chance';
import React from 'react';
import { useStore } from './StoreProvider';
import { User } from './User';

const c = new chance.Chance();

export function UsersList() {
  const { users, addUser } = useStore();

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
}
