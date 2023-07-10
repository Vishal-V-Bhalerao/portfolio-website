'use client'
import lottie from 'lottie-web'
import useMyCustomHook from '../hooks/customTypedRef'
import animationData from '@/public/json/17095-wavey-circle.json'
import React, { useEffect, useRef } from 'react'
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
  }, [])
  return (
    <>
      <div className="w-full h-full" ref={animationRef}></div>
      <div className="w-screen h-screen bg-white"></div>
    </>
  )
}
