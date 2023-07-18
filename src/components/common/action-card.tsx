import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, ReactElement, useState } from 'react'

interface ActionCardProps {
  bgColor: string
  type: 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE'
  children?: ReactElement
  textColor: string
  scrollTextSize: string
  scrollTextColor: string
  hideTextOnHover?: boolean
}

const ActionCard: FC<ActionCardProps> = ({
  bgColor,
  type,
  children,
  textColor,
  scrollTextSize,
  scrollTextColor,
  hideTextOnHover = false,
}: ActionCardProps) => {
  const [isHoverActive, setIsHoverActive] = useState(false)
  const getClassNameByType = useCallback(() => {
    let sizeClass = 'medium'
    switch (type) {
      case 'XSMALL':
        sizeClass = 'x_small'
        break
      case 'SMALL':
        sizeClass = 'small'
        break
      case 'LARGE':
        sizeClass = 'large'
        break
      case 'XLARGE':
        sizeClass = 'x_large'
        break
    }
    return sizeClass
  }, [type])
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseOver={() => setIsHoverActive(true)}
      onMouseLeave={() => setIsHoverActive(false)}
      className={`flex flex-col justify-end p-14 cursor-pointer relative w-full h-full border-ra rounded-full overflow-hidden transition ease delay-100 bg-blue-500 duration-300 ${getClassNameByType()}`}
    >
      <div
        style={{
          opacity: hideTextOnHover ? (isHoverActive ? 0 : 100) : isHoverActive ? 100 : 0,
        }}
        className="absolute transition-opacity top-1/3 flex gap-5"
      >
        <span
          style={{
            fontSize: scrollTextSize,
            color: scrollTextColor,
          }}
          className="inline-block font-bold text-white animation-slider whitespace-nowrap"
        >
          {'Frontend developer in React.'}
        </span>
        <span
          style={{
            fontSize: scrollTextSize,
            color: scrollTextColor,
          }}
          className="inline-block font-bold text-white animation-slider whitespace-nowrap"
        >
          {'Frontend developer in React.'}
        </span>
      </div>
      {!hideTextOnHover && isHoverActive ? null : children}
    </div>
  )
}

export default ActionCard

export interface ActionCardHeaderProps {
  label?: string
  icon?: IconDefinition
}

export const ActionCardHeader: FC<ActionCardHeaderProps> = ({ icon, label }) => {
  return (
    <div className="flex justify-between items-center">
      <div>{label && <h5>{label}</h5>}</div>
      <div>{icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</div>
    </div>
  )
}

export interface ActionCardBodyProps {
  label?: string
  icon?: IconDefinition
}

export const ActionCardBody: FC<ActionCardBodyProps> = ({ icon, label }) => {
  return (
    <div className="flex justify-between items-center">
      <div>{icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</div>
      <div>{label && <h5>{label}</h5>}</div>
    </div>
  )
}

export interface ActionCardFooterProps {
  label?: string
  icon?: IconDefinition
}

export const ActionCardFooter: FC<ActionCardFooterProps> = ({ icon, label }) => {
  return (
    <div className="flex justify-between items-center text-xl font-semibold">
      <div>{label && <h5>{label}</h5>}</div>
      <div>{icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</div>
    </div>
  )
}
