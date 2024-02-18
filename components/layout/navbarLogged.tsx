import Link from "next/link";
import { signOut } from "auth";

const NavBar = async () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <Link href="/login" className="flex items-center font-display text-xl">
          <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
            Profile
          </button>
        </Link>

        <form
          className="flex items-center font-display text-xl"
          action={async () => {
            await signOut();
          }}
        >
          <button className="text-md rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
            Sign Out
          </button>
        </form>
      </div>
    </>
  );
};
export default NavBar;
