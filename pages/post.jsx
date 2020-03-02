import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Page = () => {
  const router = useRouter();
  console.log(router);

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is puggy content</p>
    </Layout>
  );
};

export default Page;