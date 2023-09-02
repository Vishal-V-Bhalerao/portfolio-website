'use client'
import { FC, ReactElement, useRef } from 'react'
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver'
import TechSkillsSvg from '../../assets/svg/tech-skills.svg'
import Image from 'next/image'
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
      className="rounded-large w-full h-full leading-snug flex"
    >
      <div>
        <p
          ref={ref}
          style={{
            fontSize: fontSize,
            color: textColor,
          }}
        >
          <em>{text}</em>
        </p>
      </div>
      <div>
        <Image src={TechSkillsSvg} height={300} width={300} alt="tech"></Image>
      </div>
    </div>
  )
}

export default Summary
