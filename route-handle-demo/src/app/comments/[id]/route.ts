import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_response: Request, { params }: { params: { id: string } }) {
	if (parseInt(params.id) > comments.length) {
		redirect("/comments");
	}

	const comment = comments.find((comment) => comment.id === parseInt(params.id));
	return new Response(JSON.stringify(comment), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	});
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
	const body = await request.json();
	const { text } = body;
	const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
	if (index === -1) {
		return new Response("No comments found");
	}

	const comment = comments[index];
	comment.text = text;

	return new Response(JSON.stringify(comment), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	});
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
	const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
	if (index === -1) {
		return new Response("No comments found");
	}

	comments.splice(index, 1);

	return new Response("Comment deleted");
}
