import Image from 'next/image';
import { montserrat } from '@/app/fonts/index';
import { poppins } from '@/app/fonts/index';

export default function ArtistCard({
  name,
  nickname,
  email,
  avatar,

}:{
  name: string;
  nickname: string;
  avatar: string;
  email: string;
}) {
  return (
    <div className={`card glass h-full flex flex-col items-center text-center ${poppins.className}`}>
      <Image
        src={avatar}
        alt="Imagen o pintura"
        width={300}
        height={300}
        className="object-cover border-2 border-gray-300 rounded-full drop-shadow-lg"
      />
    <div className="card-body my-2 w-80 max-w-full flex flex-col justify-end">
      <h2 className="card-title font-semibold text-xl tracking-wider text-gray-500 text-center text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>{name}</h2>
      <h3 className="font-semibold font-italic text-gray-500 uppercase text-sm">{nickname}</h3>
      <p className="text-gray-500 text-xs">{email}</p>
    </div>
  </div>
  )
}
