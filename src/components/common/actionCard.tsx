import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, ReactElement, useState } from 'react'

interface ActionCardProps {
  bgColor: string
  type: 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE'
  children?: ReactElement
  textColor: string
  scrollTextSize?: string
  scrollTextColor?: string
  hideTextOnHover?: boolean
  disableAnimation?: boolean
}

const ActionCard: FC<ActionCardProps> = ({
  bgColor,
  type,
  children,
  textColor,
  scrollTextSize,
  scrollTextColor,
  hideTextOnHover = false,
  disableAnimation = false,
}: ActionCardProps) => {
  const [isHoverActive, setIsHoverActive] = useState(false)
  const getClassNameByType = useCallback(() => {
    if (disableAnimation) return ''
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

  const getChildrenElement = () => {
    if (isHoverActive) {
      if (hideTextOnHover) {
        return <div className="flex flex-col justify-between items-center h-full w-full">{children}</div>
      } else {
        return null
      }
    } else {
      return <div className="flex flex-col justify-between items-center h-full w-full">{children}</div>
    }
  }
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
      {!disableAnimation && (
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
      )}
      {getChildrenElement()}
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
    <div className="flex justify-between items-center w-full">
      <div>{label && <h5>{label}</h5>}</div>
      <div>{icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</div>
    </div>
  )
}

export interface ActionCardBodyProps {
  children?: ReactElement
}

export const ActionCardBody: FC<ActionCardBodyProps> = ({ children }) => {
  return <div className="flex justify-center items-center h-full w-full">{children}</div>
}

export interface ActionCardFooterProps {
  label?: string
  icon?: IconDefinition
}

export const ActionCardFooter: FC<ActionCardFooterProps> = ({ icon, label }) => {
  return (
    <div className="flex justify-between items-center text-xl font-semibold w-full">
      <div>{label && <h5>{label}</h5>}</div>
      <div>{icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</div>
    </div>
  )
}
