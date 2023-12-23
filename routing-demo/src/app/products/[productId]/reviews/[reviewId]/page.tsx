import NotFound from "@/app/not-found";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function ReviewDetails({ params }: Props) {
  const { productId, reviewId } = params;

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
