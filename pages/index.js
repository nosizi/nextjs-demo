import Head from 'next/head'
import Button from '../components/Button/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>This is Next.js App.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <h1>Welcome to Next.js!</h1>
      <Button type="button" text="Click me." />
      <Link href="/posts/1">
        <a>Go post 1</a>
      </Link>
      <style jsx>{`
        h1 {
          color: blue;
          text-align: center;
        }
      `}</style>
    </div>
  )
}