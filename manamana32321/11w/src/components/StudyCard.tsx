import React from "react"
import { Study } from "../data"
import { Card, CardBody } from "react-bootstrap"
import { Link } from "react-router-dom"
import Badge from "./Badge"

interface StudyCardProps {
  id: number
  study: Study
}

const StudyCard: React.FC<StudyCardProps> = ({ id, study }) => {
  const { imageSrc, title, level, stack, campus } = study

  return (
    <Link to={`/study/${id}`}>
      <Card className='text-center p-3'>
        <CardBody>
          <img alt={title} src={imageSrc} className='mb-3' width='160' />
          <h5 className='fw-bold mb-3'>{title}</h5>

          <div className='mb-3'>
            {[level, stack[0], campus].map((text) => {
              return <Badge key={text} text={text} />
            })}
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default StudyCard