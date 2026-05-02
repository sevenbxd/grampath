import NextAuth, { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ token, user }: { token: JWT; user: { id?: string } | null }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };