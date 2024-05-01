"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
	const router = useRouter();

	return (
		<div>
			<h1>Order Product</h1>
			<button
				onClick={() => {
					router.push("/");
				}}
			>
				Place order
			</button>
		</div>
	);
};

export default OrderProduct;
