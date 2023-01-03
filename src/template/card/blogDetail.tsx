import Link from 'next/link'
import { useState } from 'react'
import styled from './blogDetail.module.scss'
// eslint-disable-next-line import/no-unresolved
import Icon from '@/atom/icon/icon'
import type { Blog, Category } from '@/type/blog'

const BlogDetail = (props: Blog) => {
  const { id, title, content, updatedAt } = props
  return (
    <>
      <div className={styled.sec}>
        <ul>
          <li>
            <span className={`${styled.fa} ${styled.fa_code}`}></span>
            <p className={styled.title01}>{title}</p>
            <p>{content}</p>
            <p>{updatedAt}</p>
            <Link href={`blog/${id}`}>
              <button className={styled.button}>
                詳細へ
                <img src={Icon('SHOW')} alt='Image' />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default BlogDetail
