import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  function clickHandler() {
    router.push('./about');
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
      <Link href={'./product'}>
        <a>Product</a>
      </Link>
      <button onClick={clickHandler}>Click here</button>
    </div>
  );
};

export default Home;
