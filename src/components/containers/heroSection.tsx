'use client'
import lottie from 'lottie-web'
import useMyCustomHook from '../../hooks/customTypedRef'
import bgAnimationData from '@/public/json/17095-wavey-circle.json'
import React, { useEffect, useRef } from 'react'
import ActionCard, { ActionCardBody, ActionCardFooter, ActionCardHeader } from '../common/actionCard'
import { faFolder, faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
export default function HeroSection() {
  const { ref: bgAnimationRef } = useMyCustomHook<HTMLDivElement>()
  useEffect(() => {
    if (bgAnimationRef.current) {
      lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: bgAnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        container: bgAnimationRef.current,
      })
    }
  }, [bgAnimationRef])
  return (
    <div className="w-full cursor-pointer">
      <div ref={bgAnimationRef} className="absolute w-full h-full top-0 left-0 -z-10"></div>
      <div className="w-full bg-transparent cursor-pointer">
        <div className="w-full h-screen  flex flex-col justify-center items-center">
          <div>
            <p className="text-xl font-bold">{`HI! I am`}</p>
            <h1 className="text-6xl font-bold">{`Vishal Bhalerao`}</h1>
          </div>
        </div>
        <div className="w-full  h-130 grid gap-2 grid-cols-2">
          <ActionCard
            hideTextOnHover={true}
            scrollTextColor="black"
            scrollTextSize="9rem"
            textColor="black"
            type={'LARGE'}
            bgColor="#ADFFCD"
          >
            <>
              <div className="w-10/12 h-10/12 absolute top-0"></div>
              <ActionCardHeader></ActionCardHeader>
              <ActionCardFooter icon={faFolder} label="Work"></ActionCardFooter>
            </>
          </ActionCard>
          <div className="w-full grid gap-2">
            <div className="w-full grid gap-2 grid-cols-2">
              <ActionCard
                scrollTextColor="black"
                scrollTextSize="4rem"
                textColor="black"
                type={'MEDIUM'}
                bgColor="#D0FF94"
              >
                <>
                  <ActionCardHeader></ActionCardHeader>
                  <ActionCardBody></ActionCardBody>
                  <ActionCardFooter icon={faFolder} label="Work"></ActionCardFooter>
                </>
              </ActionCard>
              <ActionCard
                scrollTextColor="white"
                scrollTextSize="4rem"
                textColor="white"
                type={'MEDIUM'}
                bgColor="#1B1B1F"
              >
                <>
                  <ActionCardHeader></ActionCardHeader>
                  <ActionCardBody></ActionCardBody>
                  <ActionCardFooter icon={faFaceSmile} label="About Me"></ActionCardFooter>
                </>
              </ActionCard>
            </div>
            <ActionCard scrollTextColor="black" scrollTextSize="4rem" textColor="black" type={'LARGE'} bgColor="white">
              <>
                <ActionCardHeader></ActionCardHeader>
                <ActionCardBody></ActionCardBody>
                <ActionCardFooter icon={faPaperPlane} label="Contact Me"></ActionCardFooter>
              </>
            </ActionCard>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 h-1/2" ref={animationRef}></div> */}
    </div>
  )
}
