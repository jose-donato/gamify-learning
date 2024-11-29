import { auth } from "./server/auth";

export default auth((req) => {
	const isLoggedIn = !!req.auth;
	const isApiRoute = req.nextUrl.pathname.startsWith("/api");
	const isAppRoute = req.nextUrl.pathname.startsWith("/app");
	const isLoginPage = req.nextUrl.pathname === "/login";

	if (isApiRoute) return;

	if (isLoginPage && isLoggedIn) {
		return Response.redirect(new URL("/app", req.url));
	}

	if (isAppRoute && !isLoggedIn) {
		return Response.redirect(new URL("/login", req.url));
	}
});
