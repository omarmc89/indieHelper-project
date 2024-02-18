import { sql } from '@vercel/postgres'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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

  function onlyId(data: any[]) {
    return data.map((element)=>element.id)
  }

export {
  fetchArtowrks, 
  fetchArtists,
  fetchPhotos,
  fetchPaintings,
  onlyId,
}