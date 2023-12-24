"use client";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Order product</h1>
      <button onClick={onClick}>Order</button>
    </>
  );
}

export default OrderProduct;
