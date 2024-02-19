"use client";

import Image from "next/image";
import Link from "next/link";
import NavBarLogged from "./navbarLogged";
import NavBarNoLogged from "./navbarNoLogged";


export default async function NavBar({ session} : {session: any}) {

  return (
    <>
      <header
        className="navbar sticky top-0 flex w-full justify-center z-50"
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-3xl">
            <Image
              src="/indie.svg"
              alt="indieHelper logo"
              width="45"
              height="45"
              className="mr-2 rounded-sm"
            ></Image>
            <p>indieHelper</p>
          </Link>
          <Link
            href="/artworks"
            className={`flex items-center font-display text-xl`}
          >
            <Image
              src="/artworks.svg"
              alt="artwork logo"
              width="35"
              height="35"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Artworks</p>
          </Link>
          <Link
            href="/artists"
            className="flex items-center font-display text-xl"
          >
            <Image
              src="/artist.svg"
              alt="artwork logo"
              width="35"
              height="35"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Artists</p>
          </Link>
          {session ? <NavBarLogged/> : <NavBarNoLogged />}
        </div>
      </header>
    </>
  );
}
