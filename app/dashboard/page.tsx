
import {auth} from 'auth'
import Link from "next/link"
import SessionData from "@/components/SessionData"


export default async function Dashboard () {
  const session = await auth()

  console.log(session.user) // Esto mostrará 'undefined' la primera vez que se renderiza el componente

  return (
    <div className="z-20 space-y-2">
    <h1 className="text-3xl font-bold">React Server Component Usage</h1>
    <p>
      This page is server-rendered as a{" "}
      <Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
        React Server Component
      </Link>
      . It gets the session data on the server using{" "}
      <Link href="https://nextjs.authjs.dev#auth">
        <code>auth()</code>
      </Link>{" "}
      method.
    </p>
    <SessionData session={session} />
  </div>
  )
}