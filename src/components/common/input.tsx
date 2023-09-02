import { FC } from 'react'

interface InputProp {
  bgColor: string
  borderColor: string
  textColor: string
  inputType: string
}

const Input: FC<InputProp> = ({ bgColor, borderColor, textColor, inputType }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="rounded-full px-20 py-14 w-full"
    >
      <input type={inputType ? inputType : 'text'} className="w-36 bg-inherit focus-visible:outline-0"></input>
    </div>
  )
}

export default Input
