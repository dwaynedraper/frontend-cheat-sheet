import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

export default async function Component() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    console.log(session.user)
    const response = await fetch('api/db/user', {
      method: 'GET',
      body: JSON.stringify(session.user),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}