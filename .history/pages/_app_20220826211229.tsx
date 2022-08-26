import type { AppProps } from 'next/app'
import { FC } from "react"
import { Layout } from "@components/common"

const Noop = ({children}: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: any } } ) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
