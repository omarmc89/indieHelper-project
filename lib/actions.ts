'use server'

import { signIn } from '@/app/auth';
import { AuthError } from 'next-auth';
import { useRouter } from 'next/navigation';
import { sql } from '@vercel/postgres'
import { getCsrfToken } from 'next-auth/react'


 
async function authenticate(
  formData: FormData,
) {

  const rawFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  try {
    const login = await signIn('credentials', {
      email: rawFormData.email,
      password: rawFormData.password,
      redirectTo: '/dashboard',
    });
    console.log('login', login)
  } catch (error) {
    if (error instanceof AuthError) {
      console.log('error ----------------------------------')
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        case 'CallbackRouteError':
          return 'Invalid credentials';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


async function fetchArtowrks() {
  const data = await sql`
    SELECT a.id, a.title, a.description, a.image_url,a.price, u.name, u.email  FROM artworks AS a
    INNER JOIN artists AS art ON a.artist_id = art.id
    INNER JOIN users AS u ON art.user_id = u.id
    ORDER BY a.created_at DESC
    `
    return data.rows
  }

  async function fetchArtowrksByUser(id: string) {
    const data = await sql`
      SELECT a.id, a.title, a.description, a.image_url,a.price, u.name, u.email  FROM artworks AS a
      INNER JOIN artists AS art ON a.artist_id = art.id
      INNER JOIN users AS u ON art.user_id = u.id
      WHERE u.id = ${id}
      ORDER BY a.created_at DESC
      `
      return data.rows
    }

  async function fetchArtists() {
    const data = await sql`
    SELECT u.name, u.email, u.avatar, a.nickname FROM artists AS a
    INNER JOIN users AS u ON a.user_id = u.id
      `
    return data.rows
  }

  async function fetchPhotos() {
    const data = await sql`
    SELECT a.*, p.* FROM artworks AS a
    INNER JOIN photos AS p ON a.id = p.artwork_id;
      `
      return data.rows
  }

  async function fetchPaintings() {
    const data = await sql`
    SELECT a.*, p.* FROM artworks AS a
    INNER JOIN paintings AS p ON a.id = p.artwork_id;
      `
      return data.rows
  }

  async function fetchUserByEmail(email: string) {
    const data = await sql`
    SELECT u.id, u.name, u.email, u.avatar, a.nickname FROM artists AS a
    INNER JOIN users AS u ON a.user_id = u.id
    WHERE u.email = ${email}
      `
    return data.rows
  }


export {
  fetchArtowrks, 
  fetchArtists,
  fetchPhotos,
  fetchPaintings,
  fetchUserByEmail,
  fetchArtowrksByUser,
  authenticate
}