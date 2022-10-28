import { TextWithIconContainer, IconContainer } from './styles'
import { ReactNode } from 'react'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function TextWithIcon({ icon, text, iconBg }: InfoIconProps) {
  return (
    <TextWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </TextWithIconContainer>
  )
}
