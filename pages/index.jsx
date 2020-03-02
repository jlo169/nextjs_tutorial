
import Link from 'next/link';
import Layout from '../components/layout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <p>Puggy.js Blog</p>
      <ul>
        <PostLink title='Hello Next.js' />
        <PostLink title='Puggy.js is awesome' />
        <PostLink title='Deploy apps with Zeit' />
      </ul>
    </Layout>
  );
}