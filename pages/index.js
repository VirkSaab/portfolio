import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Education from './Education'

export default function Home() {
  return (
    <main className='grid lg:fixed text-white bg-gradient-to-r from-sky-800 to-indigo-800 font-sans'
      style={{
        backgroundImage: 'radial-gradient(rgba(50,50,50, .10), rgba(0, 0, 0, 0.60)), url("https://raw.githubusercontent.com/VirkSaab/portfolio/main/pages/background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >


      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Head>
        <title>JSV-CV</title>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </Head>


      <style>{`
        p {
          font-size: 1.2rem;
        }

        h1 {
          font-size: 2.5rem;
        }

        h2 {
          font-size: 1.8rem;
        }
        
        h3 {
          font-size: 1.5rem;
        }
      `}</style>

      {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 right-0 lg:-right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 lg:left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div> */}

      {/* <Image
        src="https://raw.githubusercontent.com/VirkSaab/portfolio/main/pages/background.jpg"
        layout='fill'
        alt="Profile photo"
      /> */}

      <div className="flex lg:h-screen lg:w-screen content-center">  {/* MAIN */}
        <div className="sm:m-5 lg:m-auto max-w-7xl min-h-7xl"> {/* CENTER */}
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-4 gap-2"> {/* GRID SYSTEM */}
            {/* SMALL LEFT PANE */}
            <div className="backdrop-blur-sm rounded-lg grid row-span-1 lg:row-auto lg:col-span-1 bg-gray-500 bg-opacity-30 content-center lg:self-center lg:place-content-evenly">

              {/* BRIEF CONTENT HERE */}
              <div className="rounded-lg shadow-lg p-5 pt-0 text-center">
                <Image
                  className="rounded-full border-none shadow-sm"
                  src="https://raw.githubusercontent.com/VirkSaab/portfolio/main/pages/mypwb.png"
                  alt="Profile photo"
                  width={300}
                  height={300 * 1.25}
                />
                <h1 className='font-bold mt-5'>Jitender Singh</h1>
                <h3 className="text-center m-5 ">CIO @ Manentia Ai</h3>
                <p className="text-center m-5">
                  An enthusiastic, devoted learner who always enjoys multidisciplinary research with a specific interest in Deep Learning and Computer Vision.
                </p>
                {/* BUTTONS */}
                <span className='flex flex-row justify-center pt-5'>
                  {/* GitHub */}
                  <a type="button" href="https://github.com/VirkSaab"
                    className="col text-white text-center m-5">
                    <svg
                      className="w-8 h-8"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512">
                      <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                      </path>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a type="button" href="https://www.linkedin.com/in/jsv47/"
                    className="col text-white text-center m-5">
                    <svg
                      className="w-8 h-8 text-white fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                  {/* ResearchGate */}
                  <a type="button" href="https://www.researchgate.net/profile/Jitender_Virk2"
                    className="col text-white text-center m-5">
                    <svg
                      className="w-8 h-8 text-white fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <title>ResearchGate</title>
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            {/* LARGE RIGHT PANE */}
            <div className="backdrop-blur-xl rounded-lg grid row-span-2 lg:row-auto lg:col-span-3 bg-gray-500 bg-opacity-30">
              {/* DETAILED CONTENT HERE */}
              <div className='flex flex-col'>
                <h2 className='font-bold m-5'>Education</h2>
                <Education />
              </div>

            </div>
          </div>

        </div>
      </div>
    </main >
  )
}
