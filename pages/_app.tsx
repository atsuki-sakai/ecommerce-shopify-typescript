import type { AppProps } from 'next/app'
import { FC } from "react"
import { Layout } from '@components/common';
import "@styles/main.css"
import { UIProvider } from '@components/ui/context';

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC } } ) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp
