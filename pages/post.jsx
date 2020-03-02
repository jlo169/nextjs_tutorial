import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is puggy content</p>
    </>
  )
}

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Page;