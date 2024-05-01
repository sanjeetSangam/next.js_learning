import Link from "next/link";

const page = () => {
	const productId = 100;
	return (
		<div>
			<Link href={"/"}>GO TO HOME</Link>

			<h1>PRODUCTS</h1>

			<Link href={`/products/${productId}`}>
				<h2>Product 1</h2>
			</Link>
			<Link href={`/products/${productId}`}>
				<h2>Product 2</h2>
			</Link>
			<Link href={`/products/${productId}`}>
				<h2>Product 3</h2>
			</Link>
		</div>
	);
};

export default page;
