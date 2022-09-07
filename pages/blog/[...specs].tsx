import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Blog: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Catch All Routes</h1>
      <p>It returns all parameters as array of given filename as property.</p>
    </div>
  );
};

export default Blog;
