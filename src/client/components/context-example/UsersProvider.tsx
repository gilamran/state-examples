import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export interface User {
    id: number;
    name: string;
}

export interface UsersProviderContextData {
    users: User[];
    addUser: (name: string) => void;
    removeUser: (id: number) => void;
}

export const UsersProviderContext = createContext<UsersProviderContextData | null>(null);

export const useUsers = (): UsersProviderContextData => {
    const context = useContext(UsersProviderContext);
    if (!context) {
        throw new Error('Failed to retrieve UsersProviderContext.');
    }
    return context;
};

const UsersProvider: React.FC<{ children: ReactNode }> = function UsersProvider({ children }: { children: ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = useCallback(
        async (userName: string) => {
            const user = { id: Math.random(), name: userName };
            setUsers([...users, user]);
        },
        [users]
    );

    const removeUser = useCallback(
        async (userId: number) => {
            const newUsers = users.filter((user) => user.id !== userId);
            setUsers(newUsers);
        },
        [users]
    );

    const providerValues: UsersProviderContextData = useMemo(() => {
        return {
            users,
            addUser,
            removeUser
        };
    }, [users, addUser, removeUser]);

    return <UsersProviderContext.Provider value={providerValues}>{children}</UsersProviderContext.Provider>;
};

export default UsersProvider;
