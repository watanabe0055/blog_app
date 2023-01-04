import moment from 'moment'
import Link from 'next/link'
// eslint-disable-next-line import/no-unresolved
import styled from './index.module.scss'
//import AppConteiner from '@/atom/conteiner/conteiner'
// eslint-disable-next-line import/no-unresolved
import Button from '@/atom/button/buttons'

const BlogShow = (props: { title: string; content: string; updatedAt: string }) => {
  const { title, content, updatedAt } = props
  return (
    <>
      <div className={styled.conteiner}>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${content}`,
          }}
        />
        <p> 最終更新日: {moment(updatedAt).format('YYYY-MM-DD')}</p>
        <Link href={`/`}>
          <Button text={'一覧へ'} />
        </Link>
      </div>
    </>
  )
}

export default BlogShow
