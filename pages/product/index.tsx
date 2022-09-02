import { NextPage } from 'next';
import Link from 'next/link';

const ProductDetails: NextPage = () => {
  return (
    <div>
      <h1>Product Details</h1>
      <Link href={'./'}>
        <a>Home</a>
      </Link>
      <h1>Product 1</h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
    </div>
  );
};  ``

export default ProductDetails;
