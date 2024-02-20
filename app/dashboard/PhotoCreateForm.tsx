'use client';

import { createPhoto } from '@/lib/actions';

export default function PaintingForm()
{
return (
  <form action={createPhoto}>
    <div className="p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-center text-xl text-gray-600">Create Photo</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Title' />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Description" />
                  </div>


                  <div className="md:col-span-5">
                    <label htmlFor="image_url">Image URL</label>
                    <input type="text" name="image_url" id="image_url" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="http://....." />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="style">Style</label>
                    <input type="text" name="style" id="style" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Style" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="price">Price €</label>
                    <input type="number" name="price" id="price" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Price €"  />
                  </div>
          
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">Create</button>
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
