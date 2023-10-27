'use client'
import { FC, ReactElement, useRef, useEffect } from 'react'
import animationData from '@/public/json/shapes-1697977781069.json'
import lottie from 'lottie-web'
import useMyCustomHook from '../../hooks/customTypedRef'
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
  const { ref: animationRef } = useMyCustomHook<HTMLDivElement>()
  useEffect(() => {
    if (animationRef.current) {
      lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        container: animationRef.current,
      })
    }
  }, [animationRef])
  const entry = useIntersectionObserver(ref, { threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] })
  const percentVisible = entry?.intersectionRatio ? Math.floor(entry?.intersectionRatio * 100) : 0
  return (
    <div
      id="about"
      style={{
        backgroundColor: bgColor,
        padding: padding,
      }}
      className="rounded-large w-full h-full leading-snug flex"
    >
      <div className="w-2/3">
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
      <div className="w-1/3" ref={animationRef}>
        {/* <Image src={TechSkillsSvg} height={300} width={600} alt="tech"></Image> */}
      </div>
    </div>
  )
}

export default Summary
