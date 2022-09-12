import { NextPage } from 'next';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
interface Props {
  products: Product[];
}
export interface Product {
  id: String;
  title: String;
}

const ProductPage: NextPage<Props> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={`${product.id}`}>
          <Link href={`/udemy/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductPage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
  };
}
