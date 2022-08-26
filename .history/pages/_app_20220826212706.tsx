import type { AppProps } from 'next/app'
import { FC} from 'react';
import { Layout } from '@components/common';

// Layutの型をanyからFCにするとエラーが出るが通る。
function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC } } ) {


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
