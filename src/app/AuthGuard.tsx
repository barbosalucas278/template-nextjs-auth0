"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { redirect } from 'next/navigation'
function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  console.log(user);

  return user ? children : redirect("/api/auth/login");
}

export default AuthGuard;
