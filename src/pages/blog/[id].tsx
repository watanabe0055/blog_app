import client from '../../../libs/client'
import BlogShow from '@/template/id/index'
import type { Blog, Category } from '@/type/blog'
import AppConteiner from '@/atom/conteiner/conteiner'

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: any) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// microCMSへAPIリクエスト
export const getStaticProps = async (context: { params: { id: any } }) => {
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

// Propsの型
type Props = {
  blog: Blog[]
  category: Category[]
}

export default function BlogId({ blog }: any) {
  console.log(blog)
  return (
    <>
      <BlogShow title={blog.title} content={blog.content} updatedAt={blog.updatedAt} />
    </>
  )
}
