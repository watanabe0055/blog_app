import Link from 'next/link'
import client from '../../../libs/client'
// eslint-disable-next-line import/no-unresolved
import Icon from '@/atom/icon/icon'
import type { Blog, Category } from '@/type/blog'

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: any) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// microCMSへAPIリクエスト
export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: 'blogs',
    contentId: id,
  })
  console.log(data)

  return {
    props: {
      blog: data,
    },
  }
}

export default function BlogId({ blog }) {
  return (
    <>
      <h1>{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
      <Link href={`/`}>
        <button>
          詳細へ
          <img src={Icon('INDEX')} alt='Image' />
        </button>
      </Link>
    </>
  )
}
