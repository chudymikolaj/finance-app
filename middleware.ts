import { withAuth } from "next-auth/middleware";

export default withAuth({
	// Matches the pages config in `[...nextauth]`
	pages: {
		signIn: "/login",
		error: "/login",
	},
});

export const config = {
	matcher: ["/dashboard/:path*", "/ustawienia/:path*", "/kalkulatory/:path*", "/notifications/:path*"],
};
