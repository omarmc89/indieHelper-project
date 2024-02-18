
import { fetchArtowrks } from '@/lib/utils';
import Card from "@/components/ArtworkCard";
import { permanent_maker} from "./fonts/index";
import Image from 'next/image';


export default async function Home() {

  const artworks = await fetchArtowrks()

  return (
    <>
      <div className="z-10 h-dvh px-5 xl:px-0 flex flex-col items-center justify-around">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Amplify Your Art: Elevating Your
          <span className={`${permanent_maker.className}`}> CREATIONS </span>
           to the Spotlight!
        </h1>
        <h1
            className={`animate-fade-up  bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards"}}
        >
          {`Let's see our latest artists works!`}
        </h1>
        <div className={`flex items-center justify-center animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]`}
        style={{ animationDelay: "0.3s", animationFillMode: "forwards", marginBottom: '4rem' }}>

        <Image
          src="/arrow.svg"
          alt="arrow"
          width={100}
          height={100}
          className={`w-screen animate-bounce w-20 h-20 md:w-40 md:h-40`}
          style={{ animationDelay: "0.4s", animationFillMode: "forwards", objectPosition: 'center', opacity: 0.8}}
        />
        </div>
      </div>
      <div className="z-10 grid w-full max-w-screen-xl grid-cols-1 gap-8 px-5 lg:grid-cols-3 md:grid-cols-2 xl:px-0 items-center justify-center">
        {artworks.map(({ id, title, name, image_url}) => (
          <Card
            key={id}
            artist={name}
            title={title}
            image_url={image_url}
          />
        ))}
      </div>
    </>
  );
}
