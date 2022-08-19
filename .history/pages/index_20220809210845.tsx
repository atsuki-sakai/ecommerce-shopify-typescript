import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export async function getStaticProps() {

  const produts = [1,2,3]
  return {
    props: {
      produts
    },
    revalidate: 4 * 60 * 60
  }
}

const Home: NextPage = () => {
  return (

    <div>
      Hello World.
    </div>
  )
}

export default Home
