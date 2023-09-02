'use client'
import { FC, ReactElement, useRef } from 'react'
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver'
import TechSkillsSvg from '../../assets/svg/tech-skills.svg'
import Image from 'next/image'
import Input from '../common/input'
import TextArea from '../common/textArea'
import Button from '../common/button'

interface SendMailProps {
  bgColor: string
  fontSize: string
  text: string
  padding: string
  textColor: string
}

const SendMail: FC<SendMailProps> = ({ bgColor, fontSize, text, padding, textColor }: SendMailProps) => {
  const ref = useRef(null)
  const entry = useIntersectionObserver(ref, { threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] })
  const percentVisible = entry?.intersectionRatio ? Math.floor(entry?.intersectionRatio * 100) : 0
  return (
    <div>
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
      <div className="m-2 form-grid gap-2">
        <div className="input-1">
          <Input inputType={'text'} bgColor="#1D1C16" textColor="#FFF480" borderColor="#FFF480"></Input>
        </div>
        <div className="input-2">
          <Input inputType={'text'} bgColor="#1D1C16" textColor="#FFF480" borderColor="#FFF480"></Input>
        </div>
        <div className="input-3">
          <Input inputType={'text'} bgColor="#1D1C16" textColor="#FFF480" borderColor="#FFF480"></Input>
        </div>
        <div className="input-4">
          <Button bgColor="#FFF480" textColor="#FFF480" borderColor="#FFF480"></Button>
        </div>
        <div className="input-5">
          <TextArea inputType={'text'} bgColor="#1D1C16" textColor="#FFF480" borderColor="#FFF480"></TextArea>
        </div>
      </div>
    </div>
  )
}

export default SendMail
