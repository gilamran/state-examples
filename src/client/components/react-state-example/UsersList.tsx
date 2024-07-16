import chance from 'chance';
import React from 'react';
import { IProject, IUser } from './ReactStateExampleRoot';
import { User } from './User';

const c = new chance.Chance();

interface IProps {
  users: IUser[];
  projects: IProject[];
  addUser: (name: string) => void;
  removeUser: (userId: number) => void;
  assignProjectToUser: (userId: number, projectId: number) => void;
  unassignProjectFromUser: (userId: number, projectId: number) => void;
}

export function UsersList({
  users,
  projects,
  addUser,
  removeUser,
  assignProjectToUser,
  unassignProjectFromUser,
}: IProps) {
  const handleAddUser = () => {
    addUser(c.name());
  };

  return (
    <div>
      <h1>
        Users <button onClick={handleAddUser}>+</button>
      </h1>

      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          projects={projects}
          removeUser={removeUser}
          assignProjectToUser={assignProjectToUser}
          unassignProjectFromUser={unassignProjectFromUser}
        />
      ))}
    </div>
  );
}
