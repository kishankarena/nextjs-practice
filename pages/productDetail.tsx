import { NextPage } from 'next';
import fs from 'fs/promises';
import path from 'path';
interface Props {
  products: Product[];
}
interface Product {
  id: Number;
  title: String;
}
const productDetail: NextPage<Props> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li>{product.title}</li>
      ))}
    </ul>
  );
};

export default productDetail;

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
