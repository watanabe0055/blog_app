/* eslint-disable import/no-unresolved */
import Image from 'next/image'
import Link from 'next/link'
import styled from './404.module.scss'
import Button from '@/atom/button/buttons'
import Error_500 from '@/atom/error_img/Error_500-removebg-preview.png'

const CustomErrorPage = () => {
  return (
    <>
      <div className={styled.error_contents}>
        <Image
          className={styled.error_contents_image}
          layout='intrinsic'
          src={Error_500}
          alt='500_error'
        />
        <p className={styled.error_contents_text}>このページは現在存在しません</p>
        <Link href='/'>
          <Button text={'ホームへ'} />
        </Link>
      </div>
    </>
  )
}

export default CustomErrorPage
