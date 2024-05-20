import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Study } from "../data"

interface StudyDetailProps {
  studyList: Study[]
}

const StudyDetail: React.FC<StudyDetailProps> = ({ studyList }) => {
  const [study, setStudy] = useState<Study>()
  const params = useParams<{studyTitle: string}>()

  useEffect(() => {
    setStudy(studyList.find((study) => study.title === params.studyTitle))
  }, [studyList, params])


  return <div className="text-center">
    {study && <>
      <img alt={study.title} src={study.imageSrc} width="300px" height="300px" />

      <h1 className='fw-bold mb-4'>{study.title}</h1>

      <div id='info-wrapper' className='mb-4 text-start d-flex flex-column g-1'>
        <p>📚&nbsp;{study.level}</p>
        <p>🏢&nbsp;{study.campus}</p>
        <p>👤&nbsp;{study.mentor}</p>
        <p>🔧&nbsp;{study.stack.join(', ')}</p>
      </div>

      <p id='description' className="text-start">
        {study.description}
      </p>
    </>}
    {!study && <p>Invalid study</p>}
  </div>
}

export default StudyDetail