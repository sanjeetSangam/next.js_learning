import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	// const requestHeader = new Headers(request.headers);
	// const headersList = headers();

	// console.log(requestHeader.get("Authorization"));
	// console.log(headersList.get("Authorization"));

	cookies().set("resultsPerPage", "20");

	const theme = request.cookies.get("theme");
	console.log(theme);
	console.log(cookies().get("resultsPerPage"));

	return new Response("<h1>Dashboard API Documentation</h1>", {
		headers: {
			"Content-Type": "text/html",
			"Set-Cookie": "theme=dark",
		},
	});
}
