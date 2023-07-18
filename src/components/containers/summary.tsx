import { FC } from 'react'
import ActionCard from '../common/action-card'

interface SummaryProps {
  bgColor: string
  fontSize: string
  text: string
  padding: string
  textColor: string
}

const Summary: FC<SummaryProps> = ({ bgColor, fontSize, text, padding, textColor }: SummaryProps) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: padding,
      }}
      className="rounded-large w-full h-full leading-snug"
    >
      <p
        style={{
          fontSize: fontSize,
          color: textColor,
        }}
      >
        <em>{text}</em>
      </p>
    </div>
  )
}

export default Summary
