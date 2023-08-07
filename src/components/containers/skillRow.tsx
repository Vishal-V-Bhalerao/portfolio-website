'use client'
import { useRef } from 'react'

import ActionCard, { ActionCardBody } from '../common/actionCard'
import { useIntersectionObserver } from '@/src/hooks/useIntersectionObserver'

const thresholdArray: Array<number> = []
for (let i = 1; i <= 100; i++) {
  thresholdArray.push(i * 0.01)
}

const SkillRow = () => {
  const ref = useRef(null)
  const entry = useIntersectionObserver(ref, { threshold: thresholdArray }) // [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  const percentVisible = entry?.intersectionRatio ? Math.floor(entry?.intersectionRatio * 50) : 0

  return (
    <div>
      <div
        className="flex flex-row w-full h-96"
        style={
          {
            // backgroundColor: '#1B1B1F',
          }
        }
      >
        <div
          className="w-1/2 transition ease delay-100 duration-1000"
          style={{
            transition: 'transform 1s fade-in',
            transform: `translate(${Math.floor(50 - percentVisible)}%, 0%)`,
          }}
        >
          <ActionCard bgColor={'#1B1B1F'} type={'MEDIUM'} textColor={'#A5A1FF'} disableAnimation>
            <ActionCardBody>
              <p>{percentVisible}</p>
            </ActionCardBody>
          </ActionCard>
        </div>
        <div
          className="w-1/2 transition ease delay-100 duration-1000"
          style={{
            transition: 'transform 4s fade-in',
            transform: `translate(${Math.floor(-50 + percentVisible)}%, 0%)`,
          }}
        >
          <ActionCard bgColor={'#A5A1FF'} type={'MEDIUM'} textColor={'#1B1B1F'} disableAnimation>
            <ActionCardBody></ActionCardBody>
          </ActionCard>
        </div>
      </div>
      <div ref={ref}></div>
    </div>
  )
}

export default SkillRow
