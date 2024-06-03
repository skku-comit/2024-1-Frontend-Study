import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Study } from "../data.ts"

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

  return <div className="container max-w-2xl text-center">
    {error ? <p>{error}</p> :
    isPending ? <Card className="rounded-3xl p-7 animate-pulse">
    <CardHeader className="mb-10">
      <img className="mb-3 bg-slate-700 rounded-3xl" style={{ height: 350 }}></img>
      <CardTitle className='text-3xl'></CardTitle>
    </CardHeader>

    <CardContent>
      <div className="mb-10 max-w-sm text-lg">
        <div className="flex mb-3"><FaBookOpen />&nbsp;<div className="h-5 bg-slate-700 rounded-full px-20"></div></div>
        <div className="flex mb-3"><LuSchool />&nbsp;<div className="h-5 bg-slate-700 rounded-full px-10"></div></div>
        <div className="flex mb-3"><IoPerson />&nbsp;<div className="h-5 bg-slate-700 rounded-full px-7"></div></div>
        <div className="flex mb-3"><TiSpanner />&nbsp;
          <div className="h-5 bg-slate-700 rounded-full px-10 me-3"></div>
          <div className="h-5 bg-slate-700 rounded-full px-10 me-3"></div>
          <div className="h-5 bg-slate-700 rounded-full px-10"></div>
        </div>
      </div>

      <div id='description' className="text-start">
        <div className="h-5 bg-slate-700 rounded-full mb-3"></div>
        <div className="h-5 bg-slate-700 rounded-full mb-3"></div>
        <div className="h-5 bg-slate-700 rounded-full"></div>
      </div>
    </CardContent>
  </Card> :
    study ? <Card className="rounded p-7">
      <CardHeader className="mb-10">
        <img alt={study.title} src={study.imageSrc} className="mx-auto" width="300px" height="300px" />
        <CardTitle className='text-3xl'>{study.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-10 max-w-sm text-lg">
          <p className="flex mb-3"><FaBookOpen />&nbsp;{study.level}</p>
          <p className="flex mb-3"><LuSchool />&nbsp;{study.campus}</p>
          <p className="flex mb-3"><IoPerson />&nbsp;{study.mentor}</p>
          <p className="flex"><TiSpanner />&nbsp;{study.stack.join(', ')}</p>
        </div>

        <p id='description' className="text-start">
          {study.description}
        </p>
      </CardContent>
    </Card>
    :
    <p>Invalid Study</p>}
  </div>
}

export default StudyDetail