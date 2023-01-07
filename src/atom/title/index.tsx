import Head from 'next/head'
import React from 'react'

const HundleSetTitle = (props: { title: string; content: string }) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property='og:title' content={props.content} key='title' />
      </Head>
    </>
  )
}

export default HundleSetTitle
