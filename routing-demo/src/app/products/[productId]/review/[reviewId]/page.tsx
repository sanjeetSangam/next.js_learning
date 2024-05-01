"use client";

import { notFound } from "next/navigation";

// const getRandomInteger = (count: number) => {
// 	return Math.floor(Math.random() * count);
// };

type ParamsType = {
	params: {
		productId: string;
		reviewId: string;
	};
};

const page = ({ params }: ParamsType) => {
	// const random: number = getRandomInteger(2);
	if (parseInt(params.reviewId) > 1000) {
		notFound();
	}

	// if (random === 1) {
	// 	throw new Error("Error Loading");
	// }

	return (
		<div>
			<h1>Prudct Number : {params.productId}</h1>
			<h1>Review Number : {params.reviewId}</h1>
		</div>
	);
};

export default page;
