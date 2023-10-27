'use client'
import { FC } from 'react'
import ActionCard, { ActionCardBody } from '../common/actionCard'

const Projects: FC = () => {
  return (
    <div id="projects" className="flex flex-col gap-2">
      <div className="w-full  h-130">
        <a href="https://bestdex.com/#/home">
          <ActionCard bgColor="white" type={'XLARGE'} textColor="black" hideTextOnHover>
            <ActionCardBody>
              <h1 className="text-8xl font-semibold">{'BestDEX'}</h1>
            </ActionCardBody>
          </ActionCard>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-96">
          <a href="https://www.noumena.pro/">
            <ActionCard bgColor="#CBE5FF" type={'XLARGE'} textColor="#001D32" hideTextOnHover>
              <ActionCardBody>
                <h1 className="text-6xl font-semibold">{'Noumena'}</h1>
              </ActionCardBody>
            </ActionCard>
          </a>
        </div>
        <div className="h-96">
          <a href="">
            <ActionCard bgColor="#021F23" type={'XLARGE'} textColor="#78F3E2" hideTextOnHover>
              <ActionCardBody>
                <h1 className="text-6xl font-semibold">{'3DX University'}</h1>
              </ActionCardBody>
            </ActionCard>
          </a>
        </div>
        <div className="h-96">
          <a href="">
            <ActionCard bgColor=" #D0FF94" type={'XLARGE'} textColor=" #0F2000" hideTextOnHover>
              <ActionCardBody>
                <h1 className="text-6xl font-semibold">{'The Hub'}</h1>
              </ActionCardBody>
            </ActionCard>
          </a>
        </div>
        <div className="h-96">
          <a href="https://www.3ds.com/edu">
            <ActionCard bgColor="#290038" type={'XLARGE'} textColor="#FCD6FF" hideTextOnHover>
              <ActionCardBody>
                <h1 className="text-6xl font-semibold">{'MIS'}</h1>
              </ActionCardBody>
            </ActionCard>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
