import { create } from "zustand";
import { combine, persist, createJSONStorage } from "zustand/middleware";

type User = {
  id: string;
  displayName?: string;
};
const initialState = {
  user: null as User | null,
};

export const useUser = create(
  persist(
    combine(initialState, (set) => ({
      setUser: (user: User) => set({ user }),
      clearUser: () => set({ user: null }),
    })),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
