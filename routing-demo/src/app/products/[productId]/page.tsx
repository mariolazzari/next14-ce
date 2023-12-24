import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title: string = await new Promise(resolve => {
    setTimeout(() => resolve(`Product ${params.productId} details`), 1000);
  });

  return {
    title,
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
