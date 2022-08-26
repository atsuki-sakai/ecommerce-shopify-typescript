import type { AppProps } from 'next/app'
import { FC, ReactNode } from 'react';
import { Layout } from "@components/common"

const Noop = ({children}: any) => <>{children}</>

// Layutの型をanyからFCにするとエラーが出るが通る。
function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: any } } ) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
