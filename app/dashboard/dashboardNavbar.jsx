
import Link from "next/link";
import { auth } from "@/app/auth"
import { fetchUserByEmail } from "@/lib/actions"
import Image from 'next/image'
import { montserrat } from "@/app/fonts/index"

export default async function DashboardNavbar() {

const session = await auth();
const emailAuth = session?.user.email
const user = await fetchUserByEmail(emailAuth)
const {id, name, email, avatar} = user[0]
  return (

  <section className="z-20 flex flex-col items-center justify-between p-4 mt-2">
    <h1 className={`${montserrat.className} text-xl text-center mb-5 w-full border-b`}>Profile</h1>
    <div className="w-full flex flex-row items-center justify-center gap-14">
      <div className="flex flex-col items-center">
      <Image src={avatar} alt={name} width={200} height={200} className="rounded-md" />
      <h3>{name}</h3>
      <h4>{email}</h4>
      </div>
      <Link href="/dashboard/artworks/create" className="flex items-center font-display text-xl">
        <button className={`rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black`}>
          Add Artwork
        </button>
      </Link>
      </div>
  </section>

  )
}