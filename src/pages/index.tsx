import moment from 'moment'
import client from '../../libs/client'
import BlogDetail from '../template/index/blogDetail'
import type { Blog, Category } from '../type/blog'

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

export default function Home({ blog }: any) {
  console.log(blog)
  return (
    <>
      {blog.map((blog: Blog, index: number) => (
        <div key={index}>
          <BlogDetail
            id={blog.id}
            title={blog.title}
            content={blog.content}
            updatedAt={blog.updatedAt}
            category={[]}
            createdAt={''}
            eyecatch={undefined}
            publishedAt={''}
            revisedAt={''}
          />
        </div>
      ))}
    </>
  )
}
