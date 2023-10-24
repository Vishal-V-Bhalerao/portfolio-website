import { FC, HTMLAttributes } from 'react'

interface InputProp extends HTMLAttributes<HTMLInputElement> {
  bgColor: string
  borderColor: string
  textColor: string
  inputType: string
  name: string
  value: string
}

const Input: FC<InputProp> = ({ bgColor, borderColor, textColor, inputType, name, value, ...rest }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="rounded-full py-14 pl-14 pr-6 w-full"
    >
      <input
        {...rest}
        name={name}
        value={value}
        type={inputType ? inputType : 'text'}
        className="w-64 bg-inherit focus-visible:outline-0 input-placeholder"
      ></input>
    </div>
  )
}

export default Input
