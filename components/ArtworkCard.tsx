
import Image from 'next/image';
import { montserrat } from '@/app/fonts/index';

export default function Card({
  artist,
  title,
  image_url,
  description,
  type,
  price,
}:{
  artist: string;
  title: string;
  image_url: string;
  description?: string;
  type?: string;
  price?: string;
}) {
  return (
    <div className={`card glass h-full flex flex-col items-center text-center ${montserrat.className}`}>
    <div className="relative image-container w-full h-80 md:h-90 lg:h-96 flex-shrink-0">
      <Image
        src={image_url}
        alt="Imagen o pintura"
        width={426}
        height={640}
        className="object-cover w-full h-full border-2 border-gray-300 rounded-xl drop-shadow-lg"
      />
      <p className="absolute top-5 left-5 p-1 font-bold backdrop-hue-rotate-90 bg-white/30 rounded-xl text-gray-900 uppercase">{type}</p>
      <p className="absolute bottom-5 right-5 p-1 font-bold backdrop-hue-rotate-90 bg-white/30 rounded-xl text-gray-900 uppercase">{price}</p>
    </div>
    <div className="card-body my-2 w-80 max-w-full flex flex-col justify-end">
      <h2 className="card-title font-semibold text-xl tracking-wider text-gray-500 text-center text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>{artist}</h2>
      <h3 className="font-semibold text-gray-500 uppercase text-sm">{title}</h3>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  </div>
  )
}
