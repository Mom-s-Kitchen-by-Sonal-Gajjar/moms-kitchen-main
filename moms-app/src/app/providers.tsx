"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export const Providers = ({children}:{
    children: React.ReactNode
}) =>{
    return <SessionProvider>
        {children}
        
    </SessionProvider>
}

export default function Component() {
    const { data: session, status } = useSession();
  
    if (status === "loading") {
      return <p>Loading...</p>;
    }
  
    if (!session) {
      return (
        <>
          <button className="px-4 py-2 rounded-xl border cursor-pointer border-neutral-200 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200" onClick={() => signIn()}>Sign in</button>
        </>
      );
    }
  
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button className="px-4 py-2 rounded-xl border cursor-pointer border-neutral-200 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200" onClick={() => signOut()}>Sign out</button>
      </>
    );
}