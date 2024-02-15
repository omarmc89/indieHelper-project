"use client";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-20 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-3xl">
            <Image
              src="/indie.svg"
              alt="indieHelper logo"
              width="40"
              height="40"
              className="mr-2 rounded-sm"
            ></Image>
            <p>indieHelper</p>
          </Link>
          <Link href="/artworks" className={`flex items-center font-display text-xl`}>
            <Image
              src="/artworks.svg"
              alt="artwork logo"
              width="20"
              height="20"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Artworks</p>
          </Link>
          <Link href="#" className="flex items-center font-display text-xl">
            <Image
              src="/artist.svg"
              alt="artwork logo"
              width="20"
              height="20"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Artists</p>
          </Link>
          <div>
            <button
              className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Sign In
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
