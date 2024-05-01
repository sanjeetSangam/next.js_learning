const getRandomInteger = (count: number) => {
	return Math.floor(Math.random() * count);
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
	const random: number = getRandomInteger(2);
	if (random === 1) {
		throw new Error("Error Loading products detail");
	}
	return (
		<>
			{children}
			<h2>Features products</h2>
		</>
	);
}
