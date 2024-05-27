import React from "react"
import { Study } from "../data"
import { BadgeWrapper } from "./Badge"
import { Card, CardBody } from "react-bootstrap"
import { Link } from "react-router-dom"

interface StudyCardProps {
  study: Study
}

const StudyCard: React.FC<StudyCardProps> = ({ study }) => {
  const { imageSrc, title, level, stack, campus } = study

  return (
    <Link to={`/study/${study.title}`}>
      <Card className='text-center p-3'>
        <CardBody>
          <img alt={title} src={imageSrc} className='mb-3' width='160' />
          <h5 className='fw-bold mb-3'>{title}</h5>

          <div className='mb-3'>
            <BadgeWrapper texts={[level, stack[0], campus]} />
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default StudyCard