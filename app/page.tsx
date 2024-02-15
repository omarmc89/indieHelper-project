import { sql } from "@vercel/postgres";
import Card from "@/components/home/card";
import { permanent_maker} from "./fonts/index";


export default async function Home() {

  const fetchArtworks = async() => {
    const data = await sql`
    SELECT a.id, a.title, a.description, a.image_url, u.name, u.email  FROM artworks AS a
    INNER JOIN artists AS art ON a.artist_id = art.id
    INNER JOIN users AS u ON art.user_id = u.id
    ORDER BY a.created_at DESC
    LIMIT 5
    `
    return data.rows
  }
  const artworks = await fetchArtworks()
  console.log(artworks)


  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Amplify Your Art: Elevating Your
          <span className={`${permanent_maker.className}`}> CREATIONS </span>
           to the Spotlight!
        </h1>
        <h1
            className={`animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]`}
          style={{ animationDelay: "0.15s", animationFillMode: "forwards", marginTop: '8rem', marginBottom: '8rem' }}
        >
          {`Let's see our artists work!`}
        </h1>
      </div>
      <div className="z-10 my-10 grid w-full max-w-screen-xl grid-cols-1 gap-8 px-5 lg:grid-cols-3 md:grid-cols-2 xl:px-0 items-center justify-center">
        {artworks.map(({ id, title, name, image_url, description}) => (
          <Card
            key={id}
            artist={name}
            type={title}
            description={description}
            image_url={image_url}
          />
        ))}
      </div>
    </>
  );
}
