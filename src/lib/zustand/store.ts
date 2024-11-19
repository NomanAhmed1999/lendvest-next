import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useStore = create(persist(
    (set) => ({
        theme: 'light',
        updateTheme: (newTheme: string) => set({ theme: newTheme }),
    }),
    {
      name: 'theme', // Name of the localStorage key
      // getStorage: () => sessionStorage, // Use sessionStorage instead of localStorage
      onRehydrateStorage: (state) => {
        console.log('State has been rehydrated:', state);
      },
      version: 1, // Version control for persisted state
    }
  ))


