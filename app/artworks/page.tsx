import { fetchArtowrks, fetchPaintings, fetchPhotos, onlyId } from "@/lib/utils"
import Card from "@/components/ArtworkCard"

export default async function Artworks() {
  const artworks = await fetchArtowrks()
  const paintings = await fetchPaintings()
  const photos = await fetchPhotos()
  const paintingsId = onlyId(paintings)
  const photosId = onlyId(photos)

  
  return (
    <section className="z-10 grid w-full max-w-screen-xl grid-cols-1 gap-8 mt-10 px-5 lg:grid-cols-3 md:grid-cols-2 xl:px-0 items-center justify-center">
    {artworks.map(({ id, title, name, image_url, description,price}) => (
      <Card
        key={id}
        artist={name}
        title={title}
        description={description}
        image_url={image_url}
        type={paintingsId.includes(id) ? 'painting' : 'photo'}
        price={price + '€'}
      />
    ))}
  </section>
  );
}