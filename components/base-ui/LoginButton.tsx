import { useSession, signIn, signOut } from "next-auth/react"


/**
 * LoginButton assigns the appropriate function and name to the button based on the user's session.
 * @returns {JSX.Element} Button with text "Sign In" or "Sign Out" depending on the user's session.
 */
export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}