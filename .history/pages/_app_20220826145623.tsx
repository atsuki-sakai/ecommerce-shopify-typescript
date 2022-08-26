import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@components/common';

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: any }} ) {

  const Layout = Component.Layout
  
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
