import Link from "next/link";

const page = () => {
	return (
		<div>
			<Link href={"/blog"}>
				<button>GO TO BLOG</button>
			</Link>
			<Link href={"/products"}>
				<button>GO TO PRODUCTS</button>
			</Link>
			<h1>HELLO</h1>
		</div>
	);
};

export default page;
