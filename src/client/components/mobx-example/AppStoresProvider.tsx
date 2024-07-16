import * as React from 'react';

import { ProjectsStore } from './stores/ProjectsStore';
import { UsersStore } from './stores/UsersStore';

export interface IStores {
  usersStore: UsersStore;
  projectsStore: ProjectsStore;
}

function buildStores() {
  const usersStore = new UsersStore();
  const projectsStore = new ProjectsStore(usersStore);

  return { usersStore, projectsStore };
}

export const AppContext = React.createContext<IStores | null>(null);

/// PROVIDER
export function StoresProvider({ children }: { children: React.ReactNode }) {
  const stores = React.useMemo(buildStores, []);

  return <AppContext.Provider value={stores}>{children}</AppContext.Provider>;
}

/// HOOKS
function useStores(): IStores {
  const stores = React.useContext(AppContext);
  if (!stores) {
    throw new Error('useStores must be used within a StoresProvider');
  }
  return stores;
}

export function useUsersStore(): UsersStore {
  return useStores().usersStore;
}

export function useProjectsStore(): ProjectsStore {
  return useStores().projectsStore;
}
