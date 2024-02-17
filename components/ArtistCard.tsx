import Image from 'next/image';
import { montserrat } from '@/app/fonts/index';
import { poppins } from '@/app/fonts/index';
import styles from './artists.module.css'


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
    <div className={`card realtive glass h-full flex flex-col items-center justify-center text-center ${poppins.className}`}>
      <div className={`z-10 ${styles.imgContainer}`}>
      <Image
        src={avatar}
        alt="Imagen o pintura"
        width={300}
        height={300}
        className="object-cover border-2 border-gray-300 rounded-full drop-shadow-lg"
      />
      </div>
      <div className="card-body z-5 absolute my-2 w-80 max-w-full flex flex-col justify-end">
        <h3 className="font-semibold font-italic text-gray-900 uppercase text-xl">{nickname}</h3>
        <p className="text-gray-700 text-md">{email}</p>
      </div>
      <h2 className="card-title font-semibold text-xl tracking-wider text-gray-500 text-center text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>{name}</h2>
  </div>
  )
}
