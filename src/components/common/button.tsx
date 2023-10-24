import { FC, HTMLAttributes } from 'react'

interface ButtonProp extends HTMLAttributes<HTMLButtonElement> {
  bgColor: string
  borderColor: string
  textColor: string
  type?: 'button' | 'reset' | 'submit' | undefined
}

const Button: FC<ButtonProp> = ({ bgColor, borderColor, textColor, type = 'button', ...rest }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="rounded-full w-full h-full cursor-pointer transition ease large delay-100 duration-300"
    >
      <button
        {...rest}
        type={type}
        className="rounded-full w-full h-full cursor-pointer px-20 py-14 bg-inherit focus-visible:outline-0 text-black"
      >
        Send
      </button>
    </div>
  )
}

export default Button
