
import Link from 'next/link';
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href='/p/[id]' as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log('Data fetched. Count: ', data.length);

  return {
    shows: data.map(entry => entry.show)
  };
}

export default Index;






// const PostLink = props => (
//   <li>
//     <Link href='/p/[id]' as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <p>Puggy.js Blog</p>
//       <ul>
//         <PostLink id='Hello Next.js' />
//         <PostLink id='Puggy.js is awesome' />
//         <PostLink id='Deploy apps with Zeit' />
//       </ul>
//     </Layout>
//   );
// }