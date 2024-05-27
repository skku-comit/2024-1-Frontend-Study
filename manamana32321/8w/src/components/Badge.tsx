import React from "react"


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