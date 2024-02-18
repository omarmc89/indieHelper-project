import Link from "next/link";

export default function CustomLinkLogged(user) {

  if (!user) {
    return (
      <Link href="/login" className="flex items-center font-display text-xl">
        <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
          Sign In
        </button>
      </Link>
    );
  } else {
    return (

    <Link href="/login" className="flex items-center font-display text-xl">
      <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
        Profile
      </button>
    </Link>

    )
  }
}
