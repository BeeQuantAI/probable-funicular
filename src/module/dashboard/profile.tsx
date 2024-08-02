"use client";

import { useUser } from "../auth/user-store";

export function Profile() {
  const user = useUser((s) => s.user);
  console.log(user);
  return <span>{user?.displayName}</span>;
}
