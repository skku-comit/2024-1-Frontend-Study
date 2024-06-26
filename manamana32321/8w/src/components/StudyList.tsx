import React from 'react'
import { useState } from 'react'
import { Study } from '../data'
import StudyCard from './StudyCard'
import { Container, Row, Col } from 'react-bootstrap'
import { CampusFilter } from './CampusFilter'

interface StudyListProps {
  studyList: Study[] | undefined
}

export const StudyList: React.FC<StudyListProps> = ({ studyList }) => {
  const [studyData, setStudyData] = useState(studyList)

  return (
    <Container>
      <CampusFilter studyData={studyList} setStudyData={setStudyData} />
      
      <Row className='g-5'>
        {studyData && studyData.map((study: Study, index: number) => 
          <Col key={index} xs={6} lg={3}>
            <StudyCard study={study} />
          </Col>
        )}
        {!studyData && <p>Empty List</p>}
      </Row>
    </Container>
  )
}