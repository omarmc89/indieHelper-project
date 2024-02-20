
import CreateUser from '@/app/users/UserCreateForm'

export default function CreateArtwork() {


  return (
    <section className="forms-container">
      <h1 className="text-4xl font-bold text-center p-8">Register</h1>
        <div className="py4">
        <CreateUser />
        </div>
      </section>

  )
}