import React from 'react'
import { Study } from '../data'
import StudyCard from './StudyCard'
import { Container, Row, Col } from 'react-bootstrap'

interface StudyListProps {
  studyList: Study[] | undefined
}

export const StudyList: React.FC<StudyListProps> = ({ studyList }) => {
  return (
    <Container>
      <Row className='g-5'>
        {studyList && studyList.map((study: Study, index: number) => 
          <Col key={index} xs={6} lg={3}>
            <StudyCard study={study} />
          </Col>
        )}
        {!studyList && <p>Empty List</p>}
      </Row>
    </Container>
  )
}