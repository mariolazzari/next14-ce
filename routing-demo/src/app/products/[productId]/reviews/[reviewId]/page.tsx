type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function ReviewDetails({ params }: Props) {
  return (
    <div>
      <h2>Product {params.productId}</h2>
      <h2>Review {params.reviewId}</h2>
    </div>
  );
}

export default ReviewDetails;
