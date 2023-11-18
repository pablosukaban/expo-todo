import { createContext, useContext } from 'react';

export const createProviderAndStore = <T extends new () => any>(
  storeClass: T
) => {
  const store = new storeClass();

  const StoreContext = createContext(store);

  const useStore = () => {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }
    return store;
  };

  return {
    Provider: StoreContext.Provider,
    useStore,
  };
};
