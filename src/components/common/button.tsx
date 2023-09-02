import { FC } from 'react'

interface ButtonProp {
  bgColor: string
  borderColor: string
  textColor: string
}

const Button: FC<ButtonProp> = ({ bgColor, borderColor, textColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="rounded-full w-full h-full"
    >
      <button className="rounded-full w-full h-full px-20 py-14 bg-inherit focus-visible:outline-0 text-black">
        Send
      </button>
    </div>
  )
}

export default Button
