import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type { InferGetStaticPropsType } from "next"


export async function getStaticProps() {

  const products = [1,2,3]
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <div>
      Hello World.
    </div>
  )
}
