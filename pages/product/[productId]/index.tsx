import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Product: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <h1>Details of Product {productId}</h1>;
};

export default Product;
