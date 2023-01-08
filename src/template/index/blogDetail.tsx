import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import styled from './blogDetail.module.scss'
import Button from '@/atom/button/buttons'
import Noimage from '@/atom/noimage/20200501_noimage-removebg-preview.png'
import type { Blog, Category, Eyecatch } from '@/type/blog'

const BlogDetail = (props: Blog) => {
  const { id, title, content, updatedAt, category, eyecatch, createdAt, publishedAt, revisedAt } =
    props

  //nextのimageコンポーネントのオプション
  //これがないとエラーになります！
  const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <>
      <div className={styled.sec}>
        <ul>
          <li>
            <span className={`${styled.fa} ${styled.fa_code}`}></span>
            <Image
              className={styled.eyecatch_image}
              loader={imgLoader}
              src={eyecatch?.url || Noimage}
              alt={''}
              width={300}
              height={250}
            />
            <p className={styled.title}>{title}</p>
            <p className={styled.category_text}>{category?.name}</p>
            <p>最終更新日: {moment(updatedAt).format('YYYY-MM-DD')}</p>
            <Link href={`blog/${id}`}>
              <Button text={'詳細へ'} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default BlogDetail
