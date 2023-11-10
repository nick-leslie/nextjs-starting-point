import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [

    ],
    callbacks: {
        //where you configure callbacks on events
    },
    pages: {
        signIn: '/login'
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };