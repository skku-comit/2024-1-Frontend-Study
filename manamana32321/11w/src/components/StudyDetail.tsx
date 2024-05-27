import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";

import { Study } from "../data"

const StudyDetail = () => {
  const [study, setStudy] = useState<Study>()
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { studyId } = useParams<{studyId: string}>()

  useEffect(() => {
    setIsPending(true)
    fetch(`https://getstudy-he4kudccka-uc.a.run.app/${studyId}/`).then(
      res => {
        if(!res.ok) {
          throw new Error(res.status.toString())
        }
        return res.json()
      }
    ).then(
      data => {
        setIsPending(false)
        setStudy(data)
    }).catch(error => {
      setError(error.toString())
    })
  }, [studyId])

  return <div className="text-center">
    {error ? <p>{error}</p> :
    isPending ? <>
      <img alt='...' src='...' width="300px" height="300px" />

      <h1 className='fw-bold mb-4 placeholder-glow'><span className="placeholder col-12"></span></h1>

      <div id='info-wrapper' className='mb-4 text-start d-flex flex-column g-1 placeholder-glow'>
        <p><FaBookOpen />&nbsp;<span className="placeholder col-4"></span></p>
        <p><LuSchool />&nbsp;<span className="placeholder col-4"></span></p>
        <p><IoPerson />&nbsp;<span className="placeholder col-4"></span></p>
        <p><TiSpanner />&nbsp;<span className="placeholder col-4"></span></p>
      </div>

      <p id='description' className="text-start placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
    </> :
    study ? <>
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
    <p>Invalid Study</p>}
  </div>
}

export default StudyDetail