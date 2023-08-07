import React from 'react'

import HeroSection from '@/src/components/containers/heroSection'
import Summary from '@/src/components/containers/summary'
import SkillRow from '@/src/components/containers/skillRow'
export default function Home() {
  return (
    <div className={'p-2 flex flex-col gap-2'}>
      <HeroSection></HeroSection>
      <Summary
        fontSize={'7rem'}
        padding={'48px 70px'}
        bgColor={'#1B1B1F'}
        textColor={'#A5A1FF'}
        text={`Innovative Front End Developer with 6.5 years of experience building and maintaining responsive websites.`}
      ></Summary>
      <SkillRow></SkillRow>
      <SkillRow></SkillRow>
      <SkillRow></SkillRow>
    </div>
  )
}
