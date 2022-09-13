import { NextPage } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { Product } from './index';

interface Props {
  product: Product;
}

const ProductDetailPage: NextPage<Props> = ({ product }) => {
  if (!product) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const data = await getData();

  const productId = params.pid;
  const product = data.products.find(
    (product: Product) => product.id === productId
  );
  if(!product){
     return{notFound:true}
  }
  return {
    props: {
      product,
    },
  };
}
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product: Product) => product.id);
  const pathsWithParams = ids.map((id: String) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}
export default ProductDetailPage;
