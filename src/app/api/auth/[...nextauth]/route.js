//route.js

import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/lib/actions";


export const authOptions = {
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                //1. unboxing data credentials
                const email = credentials.email
                const password = credentials.password

                //2. mencari user berdasarkan email
                const user = await getUserByEmail(email)

                if (!user) return null

                //3. cek password
                const isValid = await bcrypt.compare(password, user.password);


                if (!isValid) return null

                //4. simpan data ke session
                return {
                    id: user.id,
                    username: user.username,
                    role: user.role,
                    email: user.email
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (user) {
                token.id = user.id;
                token.username = user.username;  
                token.role = user.role;
                token.email = user.email;
            }
            return token
        },

        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user.id = token.id;
            session.user.username = token.username;
            session.user.role = token.role;
            session.user.email = token.email;

            return session
        }
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }