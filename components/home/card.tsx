
import Image from 'next/image';

export default function Card({
  artist,
  type,
  image_url,
  description
}: {
  artist: string;
  type: string;
  image_url: string;
  description: string;
}) {
  return (
  <div className="card w-96 glass flex flex-col items-center">
    <div className="w-100">
      <Image
      src={image_url}
      alt="Imagen o pintura"
      width={426}
      height={640}
      className="object-fit w-full h-full"
      ></Image>
    </div>
    <div className="card-body">
      <h2 className="card-title text-xl tracking-wider text-gray-500 md:text-lg dark:text-gray-400 text-center">{artist}</h2>
      <p><span>{type}</span> - {description}</p>
    </div>
  </div>
  )

}
