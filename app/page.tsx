import React from 'react'

import HeroSection from '@/src/components/containers/heroSection'
import Summary from '@/src/components/containers/summary'
import SkillRow from '@/src/components/containers/skillRow'
import { SKILLS } from '@/src/constants/text'
import Projects from '@/src/components/containers/projects'
import SendMail from '@/src/components/containers/sendMail'
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
      <div className="flex flex-col gap-2">
        {SKILLS &&
          SKILLS.map((skill) => (
            <SkillRow key={skill.id} skillName={skill.name} description={skill.description}></SkillRow>
          ))}
      </div>
      <Projects></Projects>
      <SendMail
        fontSize={'7rem'}
        padding={'48px 70px'}
        bgColor={'#1D1C16'}
        textColor={'#D4C951'}
        text={`Do you have a question, an idea, or a project you need help with? Contact us!`}
      ></SendMail>
    </div>
  )
}
