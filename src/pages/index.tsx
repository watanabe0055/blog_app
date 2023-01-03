import { Inter } from '@next/font/google'
import client from '../../libs/client'
import BlogDetail from '../template/card/blogDetail'
import type { Blog, Category } from '../type/blog'

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
  console.log(blog)
  return (
    <>
      {detail.map((blog: Blog, index: number) => (
        <div key={index}>
          <BlogDetail
            id={blog.id}
            title={blog.title}
            content={blog.content}
            updatedAt={blog.updatedAt}
          />
        </div>
      ))}
    </>
  )
}
