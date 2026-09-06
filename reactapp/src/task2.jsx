function ProductList() {
	const products = ["Laptop", "Mobile", "Headphones", "Keyboard"];

	return (
		<>
			<h1>Products</h1>
			<ul>
				{products.map((product) => (
					<li key={product}>{product}</li>
				))}
			</ul>
		</>
	);
}

export default ProductList;
