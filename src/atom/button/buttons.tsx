// eslint-disable-next-line import/no-unresolved
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import styled from './button.module.scss'

const Button = (props: { text: string }) => {
  return (
    <>
      <button className={styled.buttonUI}>{props.text}</button>
    </>
  )
}
export default Button
