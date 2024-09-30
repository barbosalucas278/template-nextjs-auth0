"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

function Home() {
  const { user } = useUser();

  return (
    <div>
      <a href="/api/auth/logout">Logout</a>
      <div>
        <h1>HOME Web en construcción</h1>
        <h2>{user?.email}</h2>
      </div>
    </div>
  );
}

export default Home;
