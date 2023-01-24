import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="index"/>
      <Footer/>
    </>
  )
}
