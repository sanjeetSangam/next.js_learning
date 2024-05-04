import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// cookies
	const response = NextResponse.next();
	const themePreference = request.cookies.get("theme");
	if (!themePreference) {
		response.cookies.set("theme", "dark");
	}

	// headers
	response.headers.set("custom-header", "custom-value");

	return response;

	// redirection method 2:
	// if (request.nextUrl.pathname === "/profile") {
	// 	return NextResponse.rewrite(new URL("/hello", request.url)); // doesn't change the url
	// 	// return NextResponse.redirect(new URL("/hello", request.url));
	// }

	// redirection method 1:
	// return NextResponse.redirect(new URL("/", request.url));
}

// redirection method 1:
// export const config = {
// 	matcher: "/profile",
// };
