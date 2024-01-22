
import Image from 'next/image';
import { montserrat } from '@/app/fonts/index';

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
    <div className={`card glass h-full flex flex-col items-center text-center ${montserrat.className}`}>
    <div className="image-container w-full h-80 md:h-90 lg:h-96 flex-shrink-0">
      <Image
        src={image_url}
        alt="Imagen o pintura"
        width={426}
        height={640}
        className="object-contain w-full h-full rounded-xl"
      />
    </div>
    <div className="card-body my-2 w-80 max-w-full flex flex-col justify-end">
      <h2 className="card-title font-semibold text-xl tracking-wider text-gray-500 text-center text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>{artist}</h2>
      <p className="text-sm" style={{fontSize:'0.7rem'}}><span className="font-semibold text-gray-500 uppercase text-sm">{type}</span> - {description}</p>
    </div>
  </div>
  )

}
