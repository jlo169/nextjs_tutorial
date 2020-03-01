import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href='/about'>
        <a title='About Pug'>About Page</a>
      </Link>
      <p>Hello Puggy.js</p>
    </div>
  )
}