import { Suspense } from "react";

import Product from "@/components/product";
import Reviews from "@/components/reviews";

const ProductDetail = () => {
	return (
		<div>
			<h1>ProductDetail</h1>
			<Suspense fallback={<p>Loading product...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading review...</p>}>
				<Reviews />
			</Suspense>
		</div>
	);
};

export default ProductDetail;
