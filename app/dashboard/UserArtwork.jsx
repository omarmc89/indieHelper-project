import Image from 'next/image'
import Link from 'next/link'
import DeleteButton from '@/app/dashboard/deleteButton'

export default async function UserArtwork({artwork}) {


return (
      <article className="p-4 max-h-[500px]" >
        <div className="w-full text-md h-10 flex items-center justify-center font-bolduppercase text-gray-600">
          <h5>{artwork.title}</h5>
        </div>
        <div className="w-full h-3/4 relative overflow-hidden rounded-lg shadow-md border border-gray-400 m-1">
          <Image 
            src={artwork.image_url}
            alt={artwork.title}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="w-full h-1/6 flex justify-around items-center mt-5">
          <Link href={`/dashboard/artworks/${artwork.id}/edit`} className="w-1/5 py-1 text-center border-2 border-gray-300 bg-gray-300 rounded-lg text-lg font-bold cursor-pointer shadow-md transition-colors hover:bg-gray-400 hover:text-white focus:outline-none">✏️</Link>
          <DeleteButton id={artwork.id} />
        </div>
      </article>
)
}