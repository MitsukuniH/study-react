import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>
      <Main page="index"/>
      <Footer/>
    </>
  )
}
