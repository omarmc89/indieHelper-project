
import { fetchArtworkById,
  fetchPaintingById,
  fetchPhotoById } from '@/lib/actions';
import PaintingForm  from '@/app/dashboard/PaintingForm';
import PhotoForm  from '@/app/dashboard/PhotoForm';
import Image from 'next/image';
import Link from 'next/link';
 
export default async function ArtworkPage({ params }: { params: { id: string } }) {

  const id = params.id
  const { artworkData , isPhoto, paintingId} = await fetchArtworkById(id)
  console.log(artworkData , isPhoto)

  let formComponent;
  
  // Obtener datos específicos dependiendo de si es una foto o una pintura
  if (isPhoto) {
    const photo = await fetchPhotoById(artworkData.id);
    formComponent = <PhotoForm artwork={artworkData} photo={photo} />;
  } else {
    const painting = await fetchPaintingById(artworkData.id);
    formComponent = <PaintingForm artwork={artworkData} painting={painting} />;
  }

  return (
    <main>
      {formComponent}
    </main>
  );
}
