'use client';

import { createUser } from '@/lib/actions';

export default function UserForm()
{
return (
  <form action={createUser}>
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-center text-xl text-gray-600">Create User</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Name' />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Email" />
                  </div>


                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Password" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" name="nickname" id="nickname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Nickname" />
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
