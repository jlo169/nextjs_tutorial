
// import Link from 'next/link';
// import Layout from '../components/layout';
// import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

function fetcher(url) {
  console.log(url);
  return fetch(url).then(res => res.json());
}

export default function Index() {
  const { data, error } = useSWR('/api/randomQuote', fetcher);
  console.log(data);
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = '...Loading...';
  if (error) quote = 'Failed to fetch quote';

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style>
        {`
          main {
            width: 90%;
            max-width: 900px;
            margin: 300px auto;
            text-align: center;
          }

          .quote {
            font-family: cursive;
            color: #e243de;
            font-size: 24px;
            padding-bottom: 10px;
          }

          .author {
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
          }
        `}
      </style>
    </main>
  )
}





// function getPosts() {
//   return [
//     {id: 'hello-puggy', title: 'Hello Puggy'},
//     {id: 'learn-puggyjs', title: 'Learning Puggy.js is awesome'},
//     {id: 'deploy-puggyjs', title: 'Deploy pugs with ZEIT'}
//   ];
// };

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>Puggy.js Blog</h1>
//       <ul>
//         {getPosts().map(post => (
//           <li key={post.id}> 
//             <Link href={"/p/[id]"} as={`/p/${post.id}`}>
//               <a>{post.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style>
//         {`
//           h1,
//           a {
//             font-family: Arial;
//           }

//           ul {
//             padding: 0;
//           }

//           li {
//             list-style: none;
//             margin: 5px 0;
//           }

//           a {
//             text-decoration: none;
//             color: blue;
//           }

//           a:hover {
//             opacity: 0.6;
//           }
//         `}
//       </style>
//     </Layout>
//   );
// }

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
