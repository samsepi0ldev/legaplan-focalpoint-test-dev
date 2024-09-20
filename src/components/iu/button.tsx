import { ComponentProps } from "react"

import './index.scss'

type ButtonProps = ComponentProps<'button'>

export function Button (props: ButtonProps) {
  return (
    <button className="main-button" {...props} />
  )
}