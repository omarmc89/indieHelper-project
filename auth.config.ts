import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        console.log(nextUrl)
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    session({ session, token, user}) {
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url
    return baseUrl
    },
  },
  providers: [],
} satisfies NextAuthConfig;