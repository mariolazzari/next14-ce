type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function ReviewDetails({ params }: Props) {
  const { productId, reviewId } = params;

  return (
    <div>
      <h2>Product {productId}</h2>
      <h2>Review {reviewId}</h2>
    </div>
  );
}

export default ReviewDetails;
