import { useEffect } from 'react'
import { useState } from 'react'
import { Study } from '../data.ts'
import StudyCard, { StudyLoadingCard } from './StudyCard'
import { CampusFilter } from './CampusFilter'

export const StudyList = () => {
  const [studyData, setStudyData] = useState<Study[]>([])
  const [studyList, setStudyList] = useState<Study[]>(studyData)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const SKELETON_COUNT = 12

  useEffect(() => {
    setIsPending(true)
    fetch('https://getstudy-he4kudccka-uc.a.run.app').then(
      res => {
        if(!res.ok) {
          throw new Error(res.status.toString())
        }
        return res.json()
      }
    ).then(
      data => {
        setIsPending(false)
        setStudyData(data)
    }).catch(error => {
      setError(error.toString())
    })
  }, [])

  useEffect(() => {
    setStudyList(studyData)},
  [studyData])

  return (
    <div className='container'>
      <CampusFilter className='mb-5' studyData={studyData} setStudyList={setStudyList}/>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {error ? <p>{error}</p> :
        isPending ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <StudyLoadingCard key={index} />
        )) :
        studyList ? studyList.map((study: Study, index: number) => 
          <StudyCard key={index} id={index} study={study} />
        ) : <p>Empty List</p>}
      </div>
    </div>
  )
}

export default StudyList