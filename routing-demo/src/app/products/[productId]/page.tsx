type Props = {
  params: {
    productId: string;
  };
};

function ProductDetails({ params }: Props) {
  return (
    <div className="p-10">
      <h1 className="text-xl">
        Product details: <span className="font-bold">{params.productId}</span>
      </h1>
    </div>
  );
}

export default ProductDetails;
