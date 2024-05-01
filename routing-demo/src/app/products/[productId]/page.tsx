type ParamsType = {
	params: {
		productId: string;
	};
};

const page = ({ params }: ParamsType) => {
	return (
		<div>
			<h1>PRODUCT : {params.productId}</h1>
		</div>
	);
};

export default page;
