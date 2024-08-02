import { create } from "zustand";
import { combine } from "zustand/middleware";

type User = {
  id: string;
  displayName?: string;
};
const initialState = {
  user: null as User | null,
};

export const useUser = create(
  combine(initialState, (set) => ({
    setUser: (user: User) => set({ user }),
    clearUser: () => set({ user: null }),
  }))
);
