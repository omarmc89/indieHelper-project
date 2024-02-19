
import { auth } from "@/app/auth"
import { fetchUserByEmail } from "@/lib/actions"
import Image from 'next/image'
import { fetchArtowrksByUser } from "@/lib/actions"
import UserArtworks from "./ArtworkCard"
import { montserrat } from "@/app/fonts/index"


export default async function Dashboard() {
  const session = await auth()
  const emailAuth = session?.user.email
  const user = await fetchUserByEmail(emailAuth)
  const {id, name, email, avatar} = user[0]
  const artworks = await fetchArtowrksByUser(id)
  return (
    <section className={`flex flex-col items-center justify-center mt-20`}>
      <h1 className={`${montserrat.className} text-xl text-center mb-5 w-full border-b`}>Your Artworks</h1>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
      mt-10">
        {artworks.map((artwork) => (
            <UserArtworks
              key={artwork.id}
              artwork={artwork}
            />
        ))}
      </article>
    </section>
  )
}