import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../views/landingPage/landingPage'
// import logo from '../public/llogo.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PreneurBay</title>
        <meta name="description" content="PreneurBay" />
        <link rel="icon" href="/ll.png" />
      </Head>

      <div>
        <LandingPage/>
      </div>
    </div>
  )
}
