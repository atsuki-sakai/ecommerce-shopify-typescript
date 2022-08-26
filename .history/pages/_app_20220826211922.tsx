import type { AppProps } from 'next/app'
import { FC } from 'react';

const Noop = ({children}: any) => <>{children}</>

// Layutの型をanyからFCにするとエラーが出るが通る。
function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC } } ) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
