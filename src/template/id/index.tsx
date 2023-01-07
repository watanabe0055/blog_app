import moment from 'moment'
import Link from 'next/link'
// eslint-disable-next-line import/no-unresolved
import styled from './index.module.scss'
// eslint-disable-next-line import/no-unresolved
import Button from '@/atom/button/buttons'

const BlogShow = (props: { title: string; category: any; content: string; updatedAt: string }) => {
  const { title, category, content, updatedAt } = props
  return (
    <>
      <div className={styled.conteiner}>
        <h1 className={styled.article_title}>{title}</h1>
        <p className={styled.article_category}>{category}</p>
        <p className={styled.article_updateTimte}>
          最終更新日: {moment(updatedAt).format('YYYY-MM-DD')}
        </p>
        <div className={styled.article_content_conteiner}>
          <div
            className={styled.article_content}
            dangerouslySetInnerHTML={{
              __html: `${content}`,
            }}
          />
        </div>
        <Link href={`/`}>
          <Button text={'一覧へ'} />
        </Link>
      </div>
    </>
  )
}

export default BlogShow
