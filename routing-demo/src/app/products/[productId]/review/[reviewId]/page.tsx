const page = ({ params }: ParamsType) => {
	return (
		<div>
			<h1>Prudct Number : {params.productId}</h1>
			<h1>Review Number : {params.reviewId}</h1>
		</div>
	);
};

export default page;
