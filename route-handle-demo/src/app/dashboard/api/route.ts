import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const requestHeader = new Headers(request.headers);
	const headersList = headers();
	console.log(requestHeader.get("Authorization"));
	console.log(headersList.get("Authorization"));
	return new Response("<h1>Dashboard API Documentation</h1>", {
		headers: {
			"Content-Type": "text/html",
		},
	});
}
