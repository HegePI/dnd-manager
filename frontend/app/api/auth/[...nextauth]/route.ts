import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      if (!session || !token) return session;
      session.user = { ...session.user, id: token.id };
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (!token || !user) return token;
      token.id = user.id;
      return token;
    },
  },
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
          name: credentials?.username || "John Doe",
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
});

export { handler as GET, handler as POST };
