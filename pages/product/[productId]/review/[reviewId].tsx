import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Review: NextPage = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log(`pathname:${router.pathname}`);
  console.log(router.query);
  return (
    <h1>
      {reviewId} Review of Product {productId}
    </h1>
  );
};

export default Review;
