import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid fixed text-black w-screen h-screen relative'>
      <Script src="https://cdn.tailwindcss.com" />
      <Head>
        <title>JSV-CV</title>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </Head>

      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4">

            <div className='grid grid-cols-2 gap-4'>
              <div className="grid col p-5 bg-white rounded-lg shadow-lg">

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <Image
                    src="/mypwb.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Jitender Singh Virk</div>
                      <p className="text-gray-700 text-base">
                        Links to my other profiles
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
              </div>

              <div className="grid col p-5 bg-white rounded-lg shadow-lg">
                <Link href="/about">About</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
