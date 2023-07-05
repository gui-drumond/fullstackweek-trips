"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data } = useSession();
  console.log(data)
  return (
    <div>
      <button onClick={()=>signIn()}>Login</button>
      <h1>{data?.user?.name}</h1>
    </div>
  )
}
