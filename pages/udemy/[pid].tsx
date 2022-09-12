import { NextPage } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { Product } from './index';

interface Props {
  product: Product;
}

const ProductDetailPage: NextPage<Props> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const productId = params.pid;
  const product = data.products.find(
    (product: Product) => product.id === productId
  );
  return {
    props: {
      product,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false,
  };
}
export default ProductDetailPage;
