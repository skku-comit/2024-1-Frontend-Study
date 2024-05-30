import { useEffect } from 'react'
import { useState } from 'react'
import { Study } from '../data.ts'
import StudyCard, { StudyLoadingCard } from './StudyCard'
import { Container, Row, Col } from 'react-bootstrap'
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
    <Container>
      <CampusFilter studyData={studyData} setStudyList={setStudyList} />
      
      <Row className='g-5'>
        {error ? <p>{error}</p> :
        isPending ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <Col key={index} xs={6} lg={3}>
            <StudyLoadingCard />
          </Col>
        )) :
        studyList ? studyList.map((study: Study, index: number) => 
          <Col key={index} xs={6} lg={3}>
            <StudyCard id={index} study={study} />
          </Col>
        ) : <p>Empty List</p>}
      </Row>
    </Container>
  )
}

export default StudyList