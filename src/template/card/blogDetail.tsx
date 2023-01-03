import { useState } from 'react'
import styled from './blogDetail.module.scss'
import type { Blog, Category } from '@/type/blog'

const BlogDetail = (props: Blog) => {
  const { title, content, updatedAt } = props
  console.log(props)
  return (
    <>
      <div className={styled.sec}>
        <ul>
          <li>
            <span className={`${styled.fa} ${styled.fa_code}`}></span>
            <p className={styled.title01}>{title}</p>
            <p>{content}</p>
            <p>{updatedAt}</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default BlogDetail
