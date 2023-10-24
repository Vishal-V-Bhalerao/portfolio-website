'use client'
import lottie from 'lottie-web'
import useMyCustomHook from '../../hooks/customTypedRef'
import bgAnimationData from '@/public/json/grid-white (1).json'
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
        <div className="w-full h-screen  flex flex-col header-name-padding items-center">
          <div>
            <p className="text-xl font-bold">{`HI! I am`}</p>
            <h1 color="#D0FF94" className="text-8xl font-bold">{`Vishal Bhalerao`}</h1>
          </div>
        </div>
        <div className="w-full  h-130 grid gap-2 grid-cols-2">
          <a href="#projects">
            <ActionCard
              hideTextOnHover={true}
              scrollTextColor="black"
              scrollTextSize="9rem"
              textColor="black"
              type={'LARGE'}
              bgColor="#ADFFCD"
              scrollText={'Frontend developer in React.'}
            >
              <>
                <div className="w-10/12 h-10/12 absolute top-0"></div>
                <ActionCardHeader></ActionCardHeader>
                <ActionCardFooter icon={faFolder} label="Work"></ActionCardFooter>
              </>
            </ActionCard>
          </a>
          <div className="w-full grid gap-2">
            <div className="w-full grid gap-2 grid-cols-2">
              <a href="#skills">
                <ActionCard
                  scrollTextColor="black"
                  scrollTextSize="4rem"
                  textColor="black"
                  type={'MEDIUM'}
                  bgColor="#D0FF94"
                  scrollText={'View my skill set.'}
                >
                  <>
                    <ActionCardHeader></ActionCardHeader>
                    <ActionCardBody></ActionCardBody>
                    <ActionCardFooter icon={faFolder} label="Skills"></ActionCardFooter>
                  </>
                </ActionCard>
              </a>
              <a href="#about">
                <ActionCard
                  scrollTextColor="white"
                  scrollTextSize="4rem"
                  textColor="white"
                  type={'MEDIUM'}
                  bgColor="#1B1B1F"
                  scrollText={'Know about me.'}
                >
                  <>
                    <ActionCardHeader></ActionCardHeader>
                    <ActionCardBody></ActionCardBody>
                    <ActionCardFooter icon={faFaceSmile} label="About Me"></ActionCardFooter>
                  </>
                </ActionCard>
              </a>
            </div>
            <a href="#contact">
              <ActionCard
                scrollTextColor="black"
                scrollTextSize="4rem"
                textColor="black"
                type={'LARGE'}
                bgColor="white"
                scrollText={'Lets have further discussion .'}
              >
                <>
                  <ActionCardHeader></ActionCardHeader>
                  <ActionCardBody></ActionCardBody>
                  <ActionCardFooter icon={faPaperPlane} label="Contact Me"></ActionCardFooter>
                </>
              </ActionCard>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 h-1/2" ref={animationRef}></div> */}
    </div>
  )
}
