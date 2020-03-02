
import Link from 'next/link';
import Layout from '../components/layout';

const PostLink = props => (
  <li>
    <Link href='/p/[id]' as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <p>Puggy.js Blog</p>
      <ul>
        <PostLink id='Hello Next.js' />
        <PostLink id='Puggy.js is awesome' />
        <PostLink id='Deploy apps with Zeit' />
      </ul>
    </Layout>
  );
}