import { notFound } from "next/navigation";

const page = ({ params }: ParamsType) => {
	if (parseInt(params.reviewId) > 1000) {
		notFound();
	}

	return (
		<div>
			<h1>Prudct Number : {params.productId}</h1>
			<h1>Review Number : {params.reviewId}</h1>
		</div>
	);
};

export default page;
