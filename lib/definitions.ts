// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
};

export type Artist = {
  id: string;
  nickname: string;
  user_id: string;
};

export type Artwork = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  artist_id: string;
};

export type ArtworkUser = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  artist_id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;

};

export type Photo = {
  id: string;
  style: string;
  artwork_id: string;
  updated_at: Date;
  created_at: Date;
};

export type Painting = {
  id: string;
  style: string;
  artwork_id: string;
  width: number;
  height: number;
};
