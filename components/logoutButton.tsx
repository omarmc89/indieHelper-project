import { signIn, signOut } from "@/app/auth"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <button >
        Sign Out
      </button>
    </form>
  )
}