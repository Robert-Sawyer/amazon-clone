import React from 'react'
import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";

function Home({products}) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

      </main>
    </>
  )
}

export async function getServerSideProps() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return {
        props: {
            products: products || null
        }
    }
}

export default Home;