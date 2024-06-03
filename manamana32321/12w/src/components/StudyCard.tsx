import React from "react"
import { Study } from "../data.ts"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

interface StudyCardProps {
  id: number
  study: Study
}

const StudyCard: React.FC<StudyCardProps> = ({ id, study }) => {
  const { imageSrc, title, level, stack, campus } = study

  return (
    <Link to={`/study/${id}`}>
      <div className='text-center p-3'>
        <img alt={title} src={imageSrc} className='mb-3' width='160' />
        <h3 className='fw-bold mb-3'>{title}</h3>

        <div className='mb-3'>
          {[level, stack[0], campus].map((text, index) =>
            <Badge key={index} variant="outline">
              {text}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  )
}

export const StudyLoadingCard = () => {
  return(
    <div className='text-center p-3'>
      <img alt='...' src='...' className='card-img-top mb-3' width='160' />
      <h3 className='fw-bold mb-3 placeholder-glow'>
        <span className="placeholder col-12"></span>
      </h3>

      <div className="card-text placeholder-glow">
        <span className="placeholder col-4"></span>
        <span className="placeholder col-2"></span>
        <span className="placeholder col-2"></span>
        <span className="placeholder col-3"></span>
        <span className="placeholder col-3"></span>
      </div>
    </div>
  )
}

export default StudyCard