
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
  <div className="card w-96 glass">
      <Image
      src={image_url}
      alt="Imagen o pintura"
      width={426}
      height={640}
      />
  <div className="card-body">
    <h2 className="card-title">{artist}</h2>
    <p>{type} - {description}</p>
  </div>
</div>
  )

}
