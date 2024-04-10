import React from "react"


interface BadgeWrapperProps {
  texts: string[]
}

export const BadgeWrapper: React.FC<BadgeWrapperProps> = ({ texts }) => {
  return <>
    {texts.map((text) => {
      return <Badge key={text} text={text} />
    })}
  </>
}


interface BadgeProps {
  text: string
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className='badge text-bg-light fw-bold mx-1 fs-6'>
      {text}
    </span>)
}

export default Badge