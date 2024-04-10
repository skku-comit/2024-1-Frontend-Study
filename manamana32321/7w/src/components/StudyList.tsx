import React from 'react'
import { Study } from '../data'
import StudyCard from './StudyCard'

interface StudyListProps {
  studyList: Study[]
  onSetStudyTitle: Function
}

export const StudyList: React.FC<StudyListProps> = ({ studyList, onSetStudyTitle }) => {
  return (
    <div className='col-6 col-lg-3'>
      {studyList.map((study: Study, index: number) => 
        <StudyCard key={index} study={study} onSetStudyTitle={onSetStudyTitle} />
      )}
    </div>
  )
}