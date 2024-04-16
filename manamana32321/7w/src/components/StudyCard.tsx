import React from "react"
import { Study } from "../data"
import { BadgeWrapper } from "./Badge"
import { Card, CardBody } from "react-bootstrap"

interface StudyCardProps {
  study: Study
  onSetStudy: Function
}

const StudyCard: React.FC<StudyCardProps> = ({ study, onSetStudy }) => {
  const { imageSrc, title, level, stack, campus } = study

  return (
    <Card className='text-center p-3' onClick={() => onSetStudy(study)}>
      <CardBody>
        <img alt={title} src={imageSrc} className='mb-3' width='160' />
        <h5 className='fw-bold mb-3'>{title}</h5>

        <div className='mb-3'>
          <BadgeWrapper texts={[level, stack[0], campus]} />
        </div>
      </CardBody>
    </Card>
  )
}

export default StudyCard