import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useCallback, ReactElement } from 'react'

interface ActionCardProps {
  bgColor: string
  type: 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE'
  children?: ReactElement
  textColor: string
}

const ActionCard: FC<ActionCardProps> = ({ bgColor, type, children, textColor }: ActionCardProps) => {
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
      className={`w-full h-full border-ra rounded-full overflow-hidden transition ease delay-100 bg-blue-500 duration-300 ${getClassNameByType()}`}
    >
      {children}
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
    <div className="flex p-5 justify-between items-center">
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
    <div className="flex p-5 justify-between items-center">
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
    <div className="flex p-5 justify-between items-center text-xl font-semibold">
      <div>{label && <h5>{label}</h5>}</div>
      <div>{icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</div>
    </div>
  )
}
