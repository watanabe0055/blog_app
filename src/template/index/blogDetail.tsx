import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import styled from './blogDetail.module.scss'
import Button from '@/atom/button/buttons'
import Noimage from '@/atom/noimage/20200501_noimage-removebg-preview.png'
import type { Blog, Category, Eyecatch } from '@/type/blog'

const BlogDetail = (props: any) => {
  const { id, title, updatedAt, category, eyecatch } = props

  const imgLoader = ({ src, width, quality }: any) => {
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
              src={eyecatch?.url || Noimage}
              alt={''}
              width={300}
              height={250}
              quality={75}
              loader={imgLoader}
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
