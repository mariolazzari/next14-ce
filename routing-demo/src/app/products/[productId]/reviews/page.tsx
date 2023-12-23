type Props = {
  params: {
    productId: string;
  };
};

function Reviews({ params }: Props) {
  return (
    <div>
      <h1>Reviews for product {params.productId}</h1>
    </div>
  );
}

export default Reviews;
