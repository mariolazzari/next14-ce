import { Suspense } from "react";
import { Product } from "../components/Product";
import { Reviews } from "../components/Reviews";

function ProductDetailPage() {
  return (
    <div>
      <h1>Product Detail Page</h1>

      <Suspense fallback={<p>Loading product</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Loading reviews</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

export default ProductDetailPage;
