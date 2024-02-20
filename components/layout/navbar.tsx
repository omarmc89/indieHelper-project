"use client";

import Image from "next/image";
import Link from "next/link";
import NavBarLogged from "./navbarLogged";
import NavBarNoLogged from "./navbarNoLogged";


export default async function NavBar({ session} : {session: any}) {

  return (
    <>
      <header
        className="navbar sticky h-20 top-0 flex w-full items-center justify-center z-50 max-w-screen-xl"
      >
        <div className="flex flex-col lg:flex-row h-16 w-full justify-between items-center">
          <div className="flex flex-col items-center justify-between lg:flex-row h-16 w-30">
          <Link href="/" className="flex items-center justify-start font-display text-3xl">
            <Image
              src="/indie.svg"
              alt="indieHelper logo"
              width="45"
              height="45"
              className="mr-2 rounded-sm"
            ></Image>
            <p>indieHelper</p>
          </Link>
          </div>
          <div className="flex flex-row h-16 w-9/12 items-center justify-around" >
            <div className="flex flex-row items-center w-full justify-center gap-20">
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
          </div>
          <div className="flex flex-row items-center w-1/4 justify-center gap-20">

          {session ? <NavBarLogged/> : <NavBarNoLogged />}

          </div>
        </div>
        </div>
      </header>
    </>
  );
}
