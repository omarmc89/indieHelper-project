const { db } = require('@vercel/postgres')
const bcrypt = require('bcrypt')
const { users,
        artists,
        artworks,
        photos,
        paintings
} = require('../lib/data.js')

async function createUsersTable(client) {
  try {
    await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

      const createTable = await client.sql`
        
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          avatar TEXT NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
      `;
      console.log(`Created "users" table`);

      // Insert data into the "users" table

      const insertedUsers = await Promise.all(
        users.map (async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql `
            INSERT INTO users (id, name, email, password, avatar)
            VALUES (${user.id},${user.name}, ${user.email}, ${hashedPassword}, ${user.avatar})
            ON CONFLICT (id) DO NOTHING;
          `;
        }),
      );

      console.log (`Seeded ${insertedUsers.length} users`);

      return {
        createTable,
        users: insertedUsers,
      };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function createArtistsTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS artists (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        nickname VARCHAR(255) NOT NULL,
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE
      );
    `;

    console.log(`Created "artists" table`);

    const insertedArtists = await Promise.all(
      artists.map(
        (artist) => client.sql`
        INSERT INTO artists (id, nickname, user_id)
        VALUES (${artist.id}, ${artist.nickname}, ${artist.user_id})
        ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedArtists.length} artists`);

    return {
      createTable,
      artists: insertedArtists,
    };
  } catch (error) {
    console.error('Error seeding artists:', error);
    throw error;
  }
}

async function createArtworksTable(client) {
  try {
    await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS artworks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        artist_id UUID NOT NULL REFERENCES artists(id),
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT NOT NULL,
        price INT NOT NULL,
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `;

    console.log(`Created "artworks" table`);

    const insertedArtworks = await Promise.all(
      artworks.map(async (artwork) => {
        return client.sql`
          INSERT INTO artworks (id,title, description, image_url, price, artist_id)
          VALUES (${artwork.id},${artwork.title}, ${artwork.description}, ${artwork.image_url}, ${artwork.price}, ${artwork.artist_id})
          ON CONFLICT (id) DO NOTHING;
        `
      })
    )

    console.log(`Seeded ${insertedArtworks.length} artworks`);

    return {
      createTable,
      artworks: insertedArtworks,
    }
} catch (error) {
  console.error('Error seeding artworks:', error);
  throw error;
}
}

async function createPhotosTable(client) {
  try {
  await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  const createTable = await client.sql `
    CREATE TABLE IF NOT EXISTS photos (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      style VARCHAR(255) NOT NULL,
      artwork_id UUID NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
      updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `

  console.log(`Created "photos" table`);

  const insertedPhotos = await Promise.all(
    photos.map(async (photo) => {
      return client.sql`
        INSERT INTO photos (id, style, artwork_id)
        VALUES (${photo.id}, ${photo.style}, ${photo.artwork_id})
        ON CONFLICT (id) DO NOTHING;
      `
    })
  )

  console.log(`Seeded ${insertedPhotos.length} photos`);

  return {
    createTable,
    photos: insertedPhotos,
  }

  } catch (error) {
    console.error('Error seeding photos:', error);
    throw error;
  }
}

async function createPaintingsTable(client) {
  try {
  await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  const createTable = await client.sql `
    CREATE TABLE IF NOT EXISTS paintings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      style VARCHAR(255) NOT NULL,
      artwork_id UUID NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
      width INT NOT NULL,
      height INT NOT NULL
    )
  `

  console.log(`Created "paintings" table`);

  const insertedPaintings = await Promise.all(
    paintings.map(async (painting) => {
      return client.sql`
        INSERT INTO paintings (id, style, width, height, artwork_id)
        VALUES (${painting.id}, ${painting.style}, ${painting.width}, ${painting.height}, ${painting.artwork_id})
        ON CONFLICT (id) DO NOTHING;
      `
    })
  )

  console.log(`Seeded ${insertedPaintings.length} paintings`);

  return {
    createTable,
    paintings: insertedPaintings,
  }

  } catch (error) {
    console.error('Error seeding paintings:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await createUsersTable(client);
  await createArtistsTable(client);
  await createArtworksTable(client);
  await createPhotosTable(client);
  await createPaintingsTable(client);
  await client.end()
}

main().catch((err) => {
  console.error(
    'Error creating tables and seeding data: ',
    err
  )
})