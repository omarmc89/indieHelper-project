
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { getUser } from '@/lib/db';
import { authConfig } from 'app/auth.config';

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email);
        if (user.length === 0) return null;
        let passwordsMatch = await compare(password, user.password!);
        if (!passwordsMatch) throw new Error ('Credentials do not match. Please try again.')
        if (passwordsMatch) return user as any;
      },
    }),
  ],
});