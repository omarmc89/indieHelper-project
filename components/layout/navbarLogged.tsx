'use client'

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NavBar = async () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row gap-4 w-full">
        <Link href="/dashboard" className="flex items-center font-display text-xl">
          <button className={twMerge(`rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black
          ${pathname === '/dashboard' ? 'bg-white text-black' : ''}
          `)}>
            Profile
          </button>
        </Link>

        <button className="rounded-full border border-black bg-red-300 p-1.5 px-4 text-sm text-black transition-all hover:bg-red-500 hover:text-black" onClick={() => signOut()}>Sign out</button>
      </div>
    </>
  );
};
export default NavBar;
