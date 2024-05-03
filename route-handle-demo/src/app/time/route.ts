export const dynamic = "force-dynamic"; // auto by default

export async function GET() {
	return new Response(
		JSON.stringify({
			time: new Date().toLocaleTimeString(),
		})
	);
}
