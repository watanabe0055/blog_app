import Head from 'next/head'
import Image from 'next/image'

import fetchCmsDate from './api/fetch'

export default function Home() {
  fetchCmsDate()
  return <></>
}
