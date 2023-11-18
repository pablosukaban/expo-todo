import { createContext, useContext } from 'react';
import { TodoStore } from '../store';

export const createProviderAndStore = <TodoStore>() => {
  const store = new TodoStore();

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
