import type { AppProps } from 'next/app'
import { FC } from "react"
import Layout from '../.history/components/common/Layout/Layout_20220826210511';

const Noop = ({children}: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC }} ) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
