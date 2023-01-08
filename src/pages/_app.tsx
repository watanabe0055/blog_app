import type { AppProps } from 'next/app'
import React from 'react'
import './reset.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
