import NextAuth from "next-auth";
import type { NextAuthOptions, User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { signIn } from "@/utils/auth";

interface ExtendedSession extends Session {
	id?: string; // Add 'id' property to the Session type
	jwt?: string; // Add 'jwt' property to the Session type
}

interface ExtendedUser extends User {
	jwt?: string; // Add 'jwt' property to the User type
}

const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Sign in with Email",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (credentials == null) return null;

				try {
					const { user, jwt } = await signIn({
						email: credentials.email,
						password: credentials.password,
					});

					return { ...user, jwt };
				} catch (error) {
					// Sign In Fail
					return null;
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }) => {
			const extendedSession: ExtendedSession = session;

			extendedSession.id = token.id as string | undefined;
			extendedSession.jwt = token.jwt as string | undefined;

			return Promise.resolve(extendedSession);
		},
		jwt: async ({ token, user }) => {
			const isSignIn = user ? true : false;

			if (isSignIn) {
				token.id = (user as ExtendedUser)?.id;
				token.jwt = (user as ExtendedUser)?.jwt;
			}

			return Promise.resolve(token);
		},
		redirect: async ({ url, baseUrl }) => {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
