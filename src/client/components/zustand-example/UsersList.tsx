import React from 'react';
import { useStore } from './store/useStore';
import { User } from './User';
import chance from 'chance';

const c = new chance.Chance();

export function UsersList() {
  const users = useStore((state) => state.users);

  const addUser = useStore((state) => state.addUser);

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
