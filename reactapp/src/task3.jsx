function ProductList() {
	const products = [
		{ name: "Laptop", available: true },
		{ name: "Mobile", available: false },
		{ name: "Headphones", available: true },
	];

	return (
		<div>
			{products.map((product) => (
				<div key={product.name}>
					<h2>{product.name}</h2>
					<p>{product.available ? "[Buy Now]" : "Out of Stock"}</p>
				</div>
			))}
		</div>
	);
}

export default ProductList;
