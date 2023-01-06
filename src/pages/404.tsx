/* eslint-disable import/no-unresolved */
import Image from 'next/image'
import Link from 'next/link'
import styled from './404.module.scss'
import Button from '@/atom/button/buttons'
import IMG_4912 from '@/atom/error_img/404_error-removebg-preview.png'

const CustomErrorPage = () => {
  return (
    <>
      <div className={styled.error_contents}>
        <Image
          src={IMG_4912}
          layout='intrinsic'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          alt='404_error'
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
