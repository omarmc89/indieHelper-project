import Image from 'next/image'
import Link from 'next/link'


export default async function UserArtworksPage() {

return (
  <section class="artworks-deck">      
      <article className="flex" >
        <div class="user-artwork-card-title">
          <h5>{artwork.title}</h5>
        </div>
        <div class="user-artwork-card-image-container">
          <Image 
          src="artwork.image_url" 
          alt="artwork.title"
          width={100}
          height={100}
          />
        </div>
        <div class="user-artwork-card-buttons">
          <Link href="#" class="button">✏️</Link>
          <Link href="#" method="DELETE" as="button" class="button">❌</Link>
        </div>
      </article>
    </section>
)
}