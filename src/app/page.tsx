"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Index() {
  const { user } = useUser();
  return (
    <main>
      <a href="/api/auth/logout">Logout</a>
      <div>
        <h1>INDEX Web en construcción</h1>
        <h2>{user?.email}</h2>
      </div>
    </main>
  );
}
