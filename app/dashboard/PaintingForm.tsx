'use client';
import Image from 'next/image';
import { Artwork, Painting } from '@/lib/definitions'
import { updatePainting } from '@/lib/actions';

export default function PaintingForm({
  artwork, painting 
}: { 
  artwork: Artwork, painting: Painting 
})
{
  const updatePaintingWithId = updatePainting.bind(null, artwork.id)

return (
  <form action={updatePaintingWithId}>
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-center text-xl text-gray-600">Update Painting</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <Image
                  src={artwork.image_url}
                  alt={artwork.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={artwork.title} />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={artwork.description} placeholder="" />
                  </div>


                  <div className="md:col-span-5">
                    <label htmlFor="image_url">Image</label>
                    <input type="text" name="image_url" id="image_url" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={artwork.image_url} placeholder="" />
                  </div>

                  {painting && (
                    <>
                  <div className="md:col-span-2">
                    <label htmlFor="style">Style</label>
                    <input type="text" name="style" id="style" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={painting.style} placeholder="" />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="width">Width</label>
                    <input type="text" name="width" id="width" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue={painting.width} />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="height">Height</label>
                    <input type="text" name="height" id="height" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue={painting.height} />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue={artwork.price} />
                  </div>
                  </>
                  )}
          
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">Update</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
  );
}
