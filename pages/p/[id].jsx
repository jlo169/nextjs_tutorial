
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
// import fetch from 'isomorphic-unfetch';


export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className='markdown'>
        <Markdown
          source={`
          This is a blog post.
          There can be a [link](/link).

          ### This is a title

          And here's content(?).
          `}
        />
      </div>
      <style jsx global>
        {`
          .markdown {
            font-family: 'Arial';
          }

          .markdown a {
            text-decoration: none;
            color:blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  );
};







// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//     {props.show.image ? <img src={props.show.image.medium} /> : null}
//   </Layout>
// )

// Post.getInitialProps = async function(context) {
//   console.log('context is', context);
//   const {id} = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return {show};
// }

// export default Post;
