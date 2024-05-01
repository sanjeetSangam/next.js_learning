const page = ({ params }: ParamsType) => {
	if (params.slug?.length === 2)
		return (
			<h1>
				Viewwing docs for feature {params.slug[0]} and concept {params.slug[1]}
			</h1>
		);

	if (params.slug?.length === 1) return <h1>Viewwing docs for feature {params.slug[0]} </h1>;

	return (
		<div>
			<h1>DOCS HOME PAGE</h1>
		</div>
	);
};

export default page;
