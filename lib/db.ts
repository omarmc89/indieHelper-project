
const { db } = require('@vercel/postgres')
import { genSaltSync, hashSync } from 'bcryptjs';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle


export async function getUser(email: string) {
  const client = await db.connect();
  
  const user = await client.sql`SELECT * FROM users WHERE email = ${email}`
  console.log(user.rows[0])
  await client.end()
  return user.rows[0];
  
}

// export async function createUser(email: string, password: string) {
//   let salt = genSaltSync(10);
//   let hash = hashSync(password, salt);

//   return await db.insert(users).values({ email, password: hash });
// }