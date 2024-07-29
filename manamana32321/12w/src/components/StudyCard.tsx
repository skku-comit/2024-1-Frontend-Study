import React from "react"
import { Study } from "../data.ts"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface StudyCardProps {
  id: number
  study: Study
}

const StudyCard: React.FC<StudyCardProps> = ({ id, study }) => {
  const { imageSrc, title, level, stack, campus } = study

  return (
    <Link to={`/study/${id}`}>
      <Card className='rounded-xl p-3 text-center hoverable-card'>
        <CardHeader>
          <img alt={title} src={imageSrc} className='mb-3 mx-auto' width='160' />
          <CardTitle className='mb-3'>{title}</CardTitle>
        </CardHeader>

        <CardContent className='flex gap-x-3 justify-center'>
          {[level, stack[0], campus].map((text, index) =>
            <Badge key={index} variant="outline">
              {text}
            </Badge>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}

export const StudyLoadingCard = () => {
  return(
    <Card className='rounded-xl p-3 text-center animate-pulse'>
      <CardHeader>
        <img className="mb-3 bg-slate-700 rounded-xl" style={{ height: 160 }}></img>
        <CardTitle className="mb-3 h-10 bg-slate-700 rounded"></CardTitle>
      </CardHeader>

      <CardContent className='flex gap-x-3 justify-center'>
        <div className="h-5 bg-slate-700 rounded-full px-5">...</div>
        <div className="h-5 bg-slate-700 rounded-full px-5">...</div>
        <div className="h-5 bg-slate-700 rounded-full px-5">...</div>
      </CardContent>
    </Card>
  )
}

export default StudyCard