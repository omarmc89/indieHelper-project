'use server'

import { signIn } from '@/app/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
import { User,
  Artist,
  Artwork,
  Photo,
  Painting,
ArtworkUser } from '@/lib/definitions';
import z from 'zod';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { auth } from "@/app/auth"
import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';


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


async function fetchArtworks() {
  const data = await sql`
    SELECT a.id,a.artist_id, a.title, a.description, a.image_url,a.price, u.name, u.email  FROM artworks AS a
    INNER JOIN artists AS art ON a.artist_id = art.id
    INNER JOIN users AS u ON art.user_id = u.id
    ORDER BY a.created_at DESC
    `
    const artworks = data.rows.map((artwork) => ({
      ...artwork
    }));
    return artworks
  }

  async function fetchArtworkById(id: string) {
    const data = await sql<Artwork>`
      SELECT a.*  FROM artworks AS a
      INNER JOIN photos AS p ON a.id = p.artwork_id
      WHERE a.id = ${id}
      `
    if (data.rows && data.rows.length > 0) {
      return { artworkData: data.rows[0], isPhoto:true }
    } else {
      const data2 = await sql<Artwork>`
      SELECT a.* FROM artworks AS a
      INNER JOIN paintings AS p ON a.id = p.artwork_id
      WHERE a.id = ${id}
      `
      const paintingId = await sql`
    SELECT p.id FROM paintings AS p
    INNER JOIN artworks AS art ON p.artwork_id = art.id
    WHERE art.id = ${id}
      `
      return  { artworkData: data2.rows[0], isPhoto:false, paintingId: paintingId.rows[0].id }
    }
  }

  async function fetchArtworksByUser(id: string) {
    const data = await sql<Artwork[]>`
      SELECT a.id, a.title, a.description, a.image_url,a.price, u.name, u.email  FROM artworks AS a
      INNER JOIN artists AS art ON a.artist_id = art.id
      INNER JOIN users AS u ON art.user_id = u.id
      WHERE u.id = ${id}
      ORDER BY a.created_at DESC
      `
      return data.rows
    }

  async function fetchArtists() {
    const data = await sql<Artist[]>`
    SELECT u.name, u.email, u.avatar, a.nickname FROM artists AS a
    INNER JOIN users AS u ON a.user_id = u.id
      `
    return data.rows
  }

  async function fetchPhotos() {
    const data = await sql<Photo[]>`
    SELECT a.*, p.* FROM artworks AS a
    INNER JOIN photos AS p ON a.id = p.artwork_id;
      `
      return data.rows
  }

  async function fetchPhotoById(id: string) {
    const data = await sql<Photo>`
    SELECT p.* FROM photos AS p
    INNER JOIN artworks AS art ON p.artwork_id = art.id
    WHERE art.id = ${id}
    `
    return data.rows[0]
  }

  async function fetchPaintings() {
    const data = await sql<Painting[]>`
    SELECT a.*, p.* FROM artworks AS a
    INNER JOIN paintings AS p ON a.id = p.artwork_id;
      `
      return data.rows
  }

  async function fetchPaintingById(id: null | string) {
    const data = await sql<Painting>`
    SELECT p.* FROM paintings AS p
    INNER JOIN artworks AS art ON p.artwork_id = art.id
    WHERE art.id = ${id}
      `
    return data.rows[0]
  }

  async function fetchUserByEmail(email: string) {
    const data = await sql<User>`
    SELECT u.id, u.name, u.email, u.avatar, a.nickname FROM artists AS a
    INNER JOIN users AS u ON a.user_id = u.id
    WHERE u.email = ${email}
      `
    return data.rows
  }

  async function fetchArtistByUserId(id: undefined | string) {
    const data = await sql<Artist>`
    SELECT a.* FROM artists AS a
    INNER JOIN users AS u ON a.user_id = u.id
    WHERE u.id = ${id}
    `
    return data.rows[0]
  }

  async function updatePainting (id: string, formData: FormData) {
    const ArtworkRawFormData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      image_url: formData.get('image_url') as string,
      price: formData.get('price') as string,
    }
    const rawPaintingData = {
      style: formData.get('style') as string,
      width: formData.get('width') as string,
      height: formData.get('height') as string,
    }

    const RawPaintingId = await sql`
    SELECT p.id FROM paintings AS p
    INNER JOIN artworks AS art ON p.artwork_id = art.id
    WHERE art.id = ${id}
      `
    const paintingId = RawPaintingId.rows[0].id
  
    await sql`
      UPDATE artworks
      SET title = ${ArtworkRawFormData.title}, description = ${ArtworkRawFormData.description}, image_url = ${ArtworkRawFormData.image_url}, price = ${ArtworkRawFormData.price}
      WHERE id = ${id}
    `
    revalidatePath('/')
    await sql`
    UPDATE paintings
    SET style = ${rawPaintingData.style}, width = ${rawPaintingData.width}, height = ${rawPaintingData.height}
    WHERE id = ${paintingId}
    `
    revalidatePath('/dashboard')
    redirect('/dashboard')
  }

  async function updatePhoto (id: string, formData: FormData) {
    const ArtworkRawFormData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      image_url: formData.get('image_url') as string,
      price: formData.get('price') as string,
    }
    const rawPhotoData = {
      style: formData.get('style') as string,
      width: formData.get('width') as string,
      height: formData.get('height') as string,
    }

    const RawPhotoId = await sql`
    SELECT p.id FROM photos AS p
    INNER JOIN artworks AS art ON p.artwork_id = art.id
    WHERE art.id = ${id}
      `
    const photoId = RawPhotoId.rows[0].id
    
    console.log(ArtworkRawFormData, rawPhotoData)

    await sql`
      UPDATE artworks
      SET title = ${ArtworkRawFormData.title}, description = ${ArtworkRawFormData.description}, image_url = ${ArtworkRawFormData.image_url}, price = ${ArtworkRawFormData.price}
      WHERE id = ${id}
    `
    revalidatePath('/dashboard')
    await sql`
    UPDATE photos
    SET style = ${rawPhotoData.style}
    WHERE id = ${photoId}
    `
    
    revalidatePath(`/dashboard/artworks/${id}/edit`)
    redirect('/dashboard')
  }

  async function createPainting (formData: FormData) {
    const session = await auth();
    const email = session?.user?.email
    const user = await fetchUserByEmail(email)
    const userId = user[0].id
    const artist = await fetchArtistByUserId(userId)
    const artworkId = randomUUID()
    const artworks = await fetchArtworks()

    const ArtworkRawFormData = {
      id: artworkId,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      image_url: formData.get('image_url') as string,
      price: formData.get('price') as string,
      artist_id: artist.id
    }
    const rawPaintingData = {
      style: formData.get('style') as string,
      width: formData.get('width') as string,
      height: formData.get('height') as string,
    }

    console.log(ArtworkRawFormData, rawPaintingData)
    
    await sql`
      INSERT INTO artworks (id, title, artist_id, description, image_url, price)
      VALUES (${artworkId}, ${ArtworkRawFormData.title}, ${artist.id}, ${ArtworkRawFormData.description}, ${ArtworkRawFormData.image_url}, ${ArtworkRawFormData.price})
    `
    revalidatePath('/dashboard')

    await sql`
      INSERT INTO paintings (style, width, height, artwork_id)
      VALUES (${rawPaintingData.style}, ${rawPaintingData.width}, ${rawPaintingData.height}, ${artworkId})
    `
    revalidatePath('/dashboard')
    redirect('/dashboard')
  }

  async function deleteArtwork( id: string ) {
    await sql`
      DELETE FROM artworks
      WHERE id = ${id}
    `
    revalidatePath('/')
  }


  async function createPhoto (formData: FormData) {
    const session = await auth();
    const email = session?.user?.email
    const user = await fetchUserByEmail(email)
    const userId = user[0].id
    const artist = await fetchArtistByUserId(userId)
    const artworkId = randomUUID()
    const artworks = await fetchArtworks()

    const ArtworkRawFormData = {
      id: artworkId,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      image_url: formData.get('image_url') as string,
      price: formData.get('price') as string,
      artist_id: artist.id
    }
    const rawPhotoData = {
      style: formData.get('style') as string,
    }

    console.log(ArtworkRawFormData, rawPhotoData)
    
    await sql`
      INSERT INTO artworks (id, title, artist_id, description, image_url, price)
      VALUES (${artworkId}, ${ArtworkRawFormData.title}, ${artist.id}, ${ArtworkRawFormData.description}, ${ArtworkRawFormData.image_url}, ${ArtworkRawFormData.price})
    `
    revalidatePath('/dashboard')

    await sql`
      INSERT INTO photos (style, artwork_id)
      VALUES (${rawPhotoData.style}, ${artworkId})
    `
    revalidatePath('/dashboard')
    redirect('/dashboard')
  }


  async function createUser (formData: FormData) {

    const userId = randomUUID()
    const artistId = randomUUID()
    const avatar= 'https://xsgames.co/randomusers/avatar.php?g=female'

    const userRawFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string, 
    }
    const artistRawFormData = {
      nickname: formData.get('nickname') as string,
    }

    const passwordHash = await bcrypt.hash(userRawFormData.password, 10)

    console.log(userRawFormData, artistRawFormData, passwordHash)
    
    await sql`
      INSERT INTO users (id, name, email, password, avatar)
      VALUES (${userId}, ${userRawFormData.name}, ${userRawFormData.email}, ${passwordHash}, ${avatar})
    `
    revalidatePath('/dashboard')

    await sql`
      INSERT INTO artists (id, nickname, user_id)
      VALUES (${artistId}, ${artistRawFormData.nickname}, ${userId})
    `
    revalidatePath('/')
    redirect('/login')
  }
  




export {
  fetchArtworks, 
  fetchArtists,
  fetchPhotos,
  fetchPaintings,
  fetchUserByEmail,
  fetchArtworksByUser,
  fetchArtworkById,
  fetchPhotoById,
  fetchPaintingById,
  updatePainting,
  updatePhoto,
  createPainting,
  fetchArtistByUserId,
  authenticate,
  createPhoto,
  createUser,
  deleteArtwork
}