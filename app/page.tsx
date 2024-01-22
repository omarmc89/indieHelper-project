
import Card from "@/components/home/card";
import { pictures } from "../lib/data.js"
import { permanent_maker} from "./fonts/index";
import useScroll from "@/lib/hooks/use-scroll";


export default async function Home() {

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
        {pictures.map(({ id, artist, type, image_url, description}) => (
          <Card
            key={id}
            artist={artist}
            type={type}
            description={description}
            image_url={image_url}
          />
        ))}
      </div>
    </>
  );
}
