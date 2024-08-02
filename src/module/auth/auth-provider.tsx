"use client";
import { useEffect } from "react";
import { getUserInfo } from "./auth-service";
import { useUser } from "./user-store";

type Props = {
  children: React.ReactNode;
};
export function AuthProvider({ children }: Props) {
  const { user, setUser } = useUser();

  useEffect(() => {
    async function initUser() {
      const { id, displayName } = await getUserInfo();

      setUser({ id, displayName });
    }

    initUser();
  }, [setUser]);

  return user ? <div>{children}</div> : <div>Loading...</div>;
}
