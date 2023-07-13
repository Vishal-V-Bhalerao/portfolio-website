'use client'
import lottie from 'lottie-web'
import useMyCustomHook from '../../hooks/customTypedRef'
import animationData from '@/public/json/127447-kitty-cat-error-404.json'
import React, { useEffect, useRef } from 'react'
import ActionCard, { ActionCardBody, ActionCardFooter, ActionCardHeader } from '../common/action-card'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
export default function HeroSection() {
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
  return (
    <div className="w-full">
      <div className="w-full h-screen">
        <div className="w-full h-2/5 flex justify-center items-center">
          <h1 className="text-8xl font-bold">{`HI! I am Vishal Bhalerao`}</h1>
        </div>
        <div className="w-full h-3/5 p-2 grid gap-2 grid-cols-2">
          <ActionCard textColor="black" type={'LARGE'} bgColor="#FFF480">
            <div className="w-full h-full" ref={animationRef}></div>
          </ActionCard>
          <div className="w-full grid gap-2">
            <div className="w-full grid gap-2 grid-cols-2">
              <ActionCard textColor="black" type={'MEDIUM'} bgColor="white">
                <div className="flex flex-col justify-between p-10 h-full">
                  <ActionCardHeader></ActionCardHeader>
                  <ActionCardBody></ActionCardBody>
                  <ActionCardFooter icon={faBriefcase} label="Work"></ActionCardFooter>
                </div>
              </ActionCard>
              <ActionCard textColor="white" type={'MEDIUM'} bgColor="#1B1B1F"></ActionCard>
            </div>
            <ActionCard textColor="white" type={'LARGE'} bgColor="#2900E8"></ActionCard>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 h-1/2" ref={animationRef}></div> */}
    </div>
  )
}
