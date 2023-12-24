import NotFound from "@/app/not-found";

const getRandom = (count: number) => {
  const num = Math.random() * count;

  return Math.floor(num);
};

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function ReviewDetails({ params }: Props) {
  const { productId, reviewId } = params;

  const random = getRandom(2);
  if (random === 1) {
    throw new Error("Error loading reviews");
  }

  console.log(random);

  if (+reviewId > 100) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>Product {productId}</h2>
      <h2>Review {reviewId}</h2>
    </div>
  );
}

export default ReviewDetails;
