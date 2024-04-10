import React from "react"
import { Study } from "../data"
import { BadgeWrapper } from "./Badge"

interface StudyCardProps {
  study: Study
  onSetStudyTitle: Function
}

const StudyCard: React.FC<StudyCardProps> = ({ study, onSetStudyTitle }) => {
  const { imageSrc, title, level, stack, campus } = study

  return (
    <div className='card text-center p-3' onClick={() => onSetStudyTitle(title)}>
      <div className='card-body'>
        <img alt={title} src={imageSrc} className='mb-3' width='160' />
        <h5 className='fw-bold mb-3'>${title}</h5>

        <div className='mb-3'>
          <BadgeWrapper texts={[level, stack[0], campus]} />
        </div>
      </div>
    </div>
  )
}

export default StudyCard