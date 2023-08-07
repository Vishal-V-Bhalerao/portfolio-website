'use client'
import { FC, ReactElement, useRef } from 'react'
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver'

interface SummaryProps {
  bgColor: string
  fontSize: string
  text: string
  padding: string
  textColor: string
}

const Summary: FC<SummaryProps> = ({ bgColor, fontSize, text, padding, textColor }: SummaryProps) => {
  const ref = useRef(null)
  const entry = useIntersectionObserver(ref, { threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] })
  const percentVisible = entry?.intersectionRatio ? Math.floor(entry?.intersectionRatio * 100) : 0
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: padding,
      }}
      className="rounded-large w-full h-full leading-snug"
    >
      <p
        ref={ref}
        style={{
          fontSize: fontSize,
          color: textColor,
        }}
      >
        <em>{text}</em>
        <em>{percentVisible}%</em>
      </p>
    </div>
  )
}

export default Summary
