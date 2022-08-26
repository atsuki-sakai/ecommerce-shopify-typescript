import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from "react"

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC }} ) {

  const Layout = Component.Layout

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
