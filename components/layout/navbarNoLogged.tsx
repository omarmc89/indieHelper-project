'use  client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NavBar = async () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row gap-4">
        <Link href="/users/create" className="flex items-center font-display text-xl">
        <button className={`rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black
          ${pathname === '/users/create' ? 'bg-white text-slate-900' : ''}
          `}>
            Sign In
          </button>
        </Link>

        <Link href="/login" className="flex items-center font-display text-xl">
        <button className={twMerge(`rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black
          ${pathname === '/login' ? 'bg-white text-black' : ''}
          `)}>
            Log In
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
