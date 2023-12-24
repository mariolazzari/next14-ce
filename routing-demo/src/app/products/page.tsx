import Link from "next/link";

function Products() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-2">Products</h1>
      <ul>
        {[1, 2, 3].map(p => (
          <li key={p}>
            <Link
              className="text-xl mb-1 hover:cursor-pointer hover:text-sky-800"
              href={`/products/${p}`}
            >
              Product {p}
            </Link>
          </li>
        ))}

        <li>
          <Link href="/products/100" replace>
            Product 100 (replace)
          </Link>
        </li>
      </ul>

      <Link
        href="/"
        className="p-2 text-sky-800 hover:cursor-pointer font-bold"
      >
        Home
      </Link>
    </div>
  );
}

export default Products;
