
import Link from 'next/link';
import Layout from '../components/layout';
// import fetch from 'isomorphic-unfetch';

function getPosts() {
  return [
    {id: 'hello-puggy', title: 'Hello Puggy'},
    {id: 'learn-puggyjs', title: 'Learning Puggy.js is awesome'},
    {id: 'deploy-puggyjs', title: 'Deploy pugs with ZEIT'}
  ];
};

export default function Blog() {
  return (
    <Layout>
      <h1>Puggy.js Blog</h1>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}> 
            <Link href={"/p/[id]"} as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style>
        {`
          h1,
          a {
            font-family: Arial;
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
      </style>
    </Layout>
  );
}

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href='/p/[id]' as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log('Data fetched. Count: ', data.length);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// }

// export default Index;


// const PostLink = props => (
//   <li>
//     <Link href='/p/[id]' as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );
