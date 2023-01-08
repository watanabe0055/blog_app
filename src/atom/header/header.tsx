import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from './header.module.scss'
import Logo from './logo_transparent.png'

const Header = () => {
  const iamgePx: number = 100

  return (
    <>
      <div className={`${styled.bg_pattern$} ${styled.Polka_v2}`}>
        <div className={styled.section}>
          <Link href={'/'}>
            <Image src={Logo} width={iamgePx} height={iamgePx} alt={'ブログサイトのロゴです'} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
