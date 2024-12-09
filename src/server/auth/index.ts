import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "../db";
import { accounts, sessions, users, verificationTokens } from "../db/schema";
import authConfig from "./config";

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: DrizzleAdapter(db, {
		usersTable: users,
		accountsTable: accounts,
		sessionsTable: sessions,
		verificationTokensTable: verificationTokens,
	}),
	...authConfig,
});
