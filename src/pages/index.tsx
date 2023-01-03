import { Inter } from '@next/font/google'
import client from '../../libs/client'
import type { Blog, Category } from '../type/blog'
import BlogDetail from '../template/card/blogDetail'

const inter = Inter({ subsets: ['latin'] })

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
  })

  return {
    props: {
      blog: data.contents,
    },
  }
}

// Propsの型
type Props = {
  blogs: Blog[]
  tags: Category[]
}

export default function Home({ blog }) {
  const detail: Props = blog

  return (
    <>
      {detail.map((blog, index) => (
        <div key={index}>
          <BlogDetail title={blog.title} content={blog.content} updatedAt={blog.updatedAt} />
        </div>
      ))}
    </>
  )
}
