import axios from 'axios'
import { createClient } from 'microcms-js-sdk'
import Client from '../../libs/client'

const fetchCmsDate = async () => {
  const data = await Client.get({
    endpoint: 'blogs',
  })
  return data.contents[0]
}

export default fetchCmsDate
