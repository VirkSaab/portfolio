import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='grid fixed bg-black text-white w-screen h-screen'>
      <Head>
        <title>JSV-CV</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      Hello World. <Link href="/about">About</Link>
    </main>
  )
}
