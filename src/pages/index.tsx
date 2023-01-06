import React from 'react'
import client from '../../libs/client'
import BlogDetail from '../template/index/blogDetail'
import type { Blog, Category } from '../type/blog'
// eslint-disable-next-line import/no-unresolved
import HundleSetTitle from '@/atom/title/index'

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
  return (
    <>
      <HundleSetTitle
        title={'一覧画面 | BLOG'}
        content={'ポートフォリオ用に作成したブログサイトです。CMSはmicroCMSを使用しています。'}
      />
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
