import client from '../../../libs/client'
import styled from './index.module.scss'
import Footer from '@/atom/footer/footer'
import Header from '@/atom/header/header'
import BlogShow from '@/template/id/index'
import type { Blog, Category } from '@/type/blog'

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: any) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// microCMSへAPIリクエスト
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: 'blogs',
    contentId: id,
    //TODO:object形式にする
    //queries: { richEditorFormat: 'object' },
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
  return (
    <>
      <Header />
      <div className={styled.appConteiner}>
        <BlogShow
          title={blog.title}
          category={blog.category?.name || undefined}
          content={blog.content}
          updatedAt={blog.updatedAt}
        />
      </div>
      <Footer />
    </>
  )
}
