import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export interface IUser {
  id: number;
  name: string;
}

export interface IUsersProviderContextData {
  users: IUser[];
  addUser: (name: string) => void;
  removeUser: (id: number) => void;
}

export const UsersProviderContext = createContext<IUsersProviderContextData | null>(null);

export const useUsers = (): IUsersProviderContextData => {
  const context = useContext(UsersProviderContext);
  if (!context) {
    throw new Error('Failed to retrieve UsersProviderContext.');
  }
  return context;
};

export const UsersProvider: React.FC<{ children: ReactNode }> = function UsersProvider({
  children,
}: {
  children: ReactNode;
}) {
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

  const providerValues: IUsersProviderContextData = useMemo(() => {
    return {
      users,
      addUser,
      removeUser,
    };
  }, [users, addUser, removeUser]);

  return <UsersProviderContext.Provider value={providerValues}>{children}</UsersProviderContext.Provider>;
};
