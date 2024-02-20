import PaintingCreateForm from '@/app/dashboard/PaintingCreateForm'
import PhotoCreateForm from '@/app/dashboard/PhotoCreateForm'

export default function CreateArtwork() {


  return (
    <section className="forms-container">
      <h1 className="text-4xl font-bold text-center">Upload your artworks!</h1>
        <div className="py4">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg grid grid-cols-2">
                    <div className="max-w-xl py-5 px-5 m-auto w-full mt-10">
                        <PaintingCreateForm />
                    </div>
                    <div className="max-w-xl py-5 px-5 m-auto w-full mt-10">
                        <PhotoCreateForm />
                    </div>
                </div>
            </div>
        </div>
      </section>

  )
}