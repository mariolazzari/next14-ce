import { Product } from "@/types/Product";

async function ProductsPage() {
  const res = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Error fetching products: ${res.statusText}`);
  }
  const products: Product[] = await res.json();

  return (
    <div className="p-8">
      <h2 className="text-2xl text-center">Products</h2>
      <ul>
        {products.map(prod => (
          <li className="flex flex-col gap-1 p-4" key={prod.id}>
            <h6 className="text-xl">{prod.title}</h6>
            <p>{prod.description}</p>
            <h6 className="text-xl font-bold text-right">
              {prod.price.toFixed(2)}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
