import { FC } from 'react'

interface TextAreaProp {
  bgColor: string
  borderColor: string
  textColor: string
  inputType: string
}

const TextArea: FC<TextAreaProp> = ({ bgColor, borderColor, textColor, inputType }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="rounded-full px-20 py-14 w-full h-full"
    >
      <textarea rows={10} className="w-full h-full bg-inherit focus-visible:outline-0"></textarea>
    </div>
  )
}

export default TextArea
