import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";

import { Study } from "../data"

const StudyDetail = () => {
  const [study, setStudy] = useState<Study>()
  const { studyId } = useParams<{studyId: string}>()

  useEffect(() => {
    fetch(`https://getstudy-he4kudccka-uc.a.run.app/${studyId}/`).then(
      res => {
        return res.json()
      }).then(
        data => {
          setStudy(data)
        })
  }, [studyId])


  return <div className="text-center">
    {study ? <>
      <img alt={study.title} src={study.imageSrc} width="300px" height="300px" />

      <h1 className='fw-bold mb-4'>{study.title}</h1>

      <div id='info-wrapper' className='mb-4 text-start d-flex flex-column g-1'>
        <p><FaBookOpen />&nbsp;{study.level}</p>
        <p><LuSchool />&nbsp;{study.campus}</p>
        <p><IoPerson />&nbsp;{study.mentor}</p>
        <p><TiSpanner />&nbsp;{study.stack.join(', ')}</p>
      </div>

      <p id='description' className="text-start">
        {study.description}
      </p>
    </>
    :
    <p>Loading...</p>}
  </div>
}

export default StudyDetail