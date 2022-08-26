import type { AppProps } from 'next/app'
import { Layout } from '@components/common';

// Layutの型をanyからFCにするとエラーが出るが通る。
function MyApp({ Component, pageProps }: AppProps ) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
