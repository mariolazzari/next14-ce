function Products() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-2">Products</h1>
      {[1, 2, 3].map(p => (
        <h2 key={p} className="text-xl mb-1">
          Product {p}
        </h2>
      ))}
    </div>
  );
}

export default Products;
