import NextAuth, { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user: User = {
          id: "323067f5-3540-428d-8038-fa3599ab237a",
          name: credentials.username ? `${credentials.username}` : "John Doe",
          email: "example@example.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      return session;
    },
    async jwt({ token, user, account, profile, session }) {
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
