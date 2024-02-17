import { fetchArtists} from "@/lib/utils"
import ArtistCard from "@/components/ArtistCard"
import styles from './artists.module.css'

export default async function Artists() {

  const artists = await fetchArtists()

  return (
    <section className="z-10 grid w-full max-w-screen-xl grid-cols-1 gap-8 px-5 lg:grid-cols-3 md:grid-cols-2 xl:px-0 items-center justify-center">
    {artists.map(({ id, name, avatar, email,nickname}) => (
      <ArtistCard
        key={id}
        name={name}
        nickname={nickname}
        email={email}
        avatar={avatar}
      />
    ))}
  </section>
  );
}