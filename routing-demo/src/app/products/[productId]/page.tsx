import { Metadata } from "next";
import Link from "next/link";

type ParamsType = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params }: ParamsType): Promise<Metadata> => {
	const title = await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`iphone ${params.productId}`);
		}, 1000);
	});

	return {
		title: `Product ${title}`,
	};
};

const page = ({ params }: ParamsType) => {
	return (
		<div>
			<Link href={"/products"}>Products Home</Link>
			<h1>PRODUCT : {params.productId}</h1>
		</div>
	);
};

export default page;
