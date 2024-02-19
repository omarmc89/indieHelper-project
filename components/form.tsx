'use client'

import { useState } from 'react';
import { authenticate } from '@/lib/actions'; 
import { useRouter } from 'next/navigation';

export function Form({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      // Llama a la función authenticate para autenticar al usuario
      const errorAuth = await authenticate(formData);
     
      // Si no hay error, continúa con la lógica de tu aplicación
      if (errorAuth) {
        // Si hay un error, maneja el error de acuerdo a tu lógica de UI
        console.log('Error:', errorAuth);
        // Aquí podrías establecer el estado de tu componente para mostrar el error en la interfaz
        setError(errorAuth);
      }
    } catch (error) {
      console.error('Error:', error);
      // Maneja cualquier otro error que pueda surgir durante el proceso de autenticación
    }
  };

  return (
    <form
      onSubmit={handleSubmit} // Llama a la función handleSubmit al enviar el formulario
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {error ? <p className="text-center text-red-500">{error}</p> : null}
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      {children}
    </form>
  );
}
