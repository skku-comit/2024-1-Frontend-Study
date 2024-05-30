import React from "react"
import { Study } from "../data.ts"
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap"
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
          <CardTitle className='fw-bold mb-3'>{title}</CardTitle>

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

export const StudyLoadingCard = () => {
  return(
    <Card className='text-center p-3'>
      <CardBody>
        <img alt='...' src='...' className='card-img-top mb-3' width='160' />
        <CardTitle className='fw-bold mb-3 placeholder-glow'>
          <span className="placeholder col-12"></span>
        </CardTitle>

        <CardText className="card-text placeholder-glow">
          <span className="placeholder col-4"></span>
          <span className="placeholder col-2"></span>
          <span className="placeholder col-2"></span>
          <span className="placeholder col-3"></span>
          <span className="placeholder col-3"></span>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default StudyCard