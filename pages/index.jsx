import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href='/about' title='About Pug'>
        <a>About Page</a>
      </Link>
      <p>Hello Puggy.js</p>
    </div>
  )
}