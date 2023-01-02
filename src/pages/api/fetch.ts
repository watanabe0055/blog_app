import Client from './client'

import axios from 'axios'
import { createClient } from 'microcms-js-sdk'

const fetchCmsDate = async () => {
  const data: any = await Client.get({
    endpoint: 'blogs',
  })
  console.log(data.contents[0].content)
}

export default fetchCmsDate
