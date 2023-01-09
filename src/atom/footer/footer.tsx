import Link from 'next/link'
import styled from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styled.footer_content}>
        <Link className={styled.footer_text} href='https://github.com/watanabe0055/blog_app'>
          Gig Hubはこちらです
        </Link>
      </div>
    </>
  )
}

export default Footer
