// pages/api/auth/[...nextauth].ts
import { Prisma, PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient()

interface Params{
  name : string,
  email : string,
  password : string
}

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        console.log(credentials);

        // Your logic to authenticate the user goes here

        return {
          id: "user1",
          name: "Shreyansh Gajjar",
          email: "shreyansh@gmail.com"
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile } : any) {
      // Initial sign in
      if (account && profile) {
        token.id = profile.sub;
        token.name = profile.name;
        token.email = profile.email;
        token.picture = profile.picture;
      }
      return token;
    },
    async session({ session, token } :  any) {
      // Send properties to the client
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.picture = token.picture;
      return session;
    },
  },
  // Add any other NextAuth configurations here
  
};

async function createUser({name, email, password }: Params) {
}

export default NextAuth(NEXT_AUTH);
