import NavbarComponent from "./navbar";
import Link from "next/link";

const NavBar = async () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <Link href="#" className="flex items-center font-display text-xl">
          <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
            Sign In
          </button>
        </Link>

        <Link href="/login" className="flex items-center font-display text-xl">
          <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
            Log In
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
