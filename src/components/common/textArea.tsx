import { FC, HTMLAttributes } from 'react'

interface TextAreaProp extends HTMLAttributes<HTMLTextAreaElement> {
  bgColor: string
  borderColor: string
  textColor: string
  inputType: string
  name: string
  value: string
}

const TextArea: FC<TextAreaProp> = ({ bgColor, borderColor, textColor, name, value, inputType, ...rest }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="rounded-full px-20 py-14 w-full h-full"
    >
      <textarea
        name={name}
        value={value}
        rows={10}
        className="w-full h-full bg-inherit focus-visible:outline-0 input-placeholder"
        {...rest}
      ></textarea>
    </div>
  )
}

export default TextArea
