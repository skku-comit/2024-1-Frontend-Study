import React from 'react'
import { Study } from '../data'
import StudyCard from './StudyCard'
import { Container, Row, Col } from 'react-bootstrap'

interface StudyListProps {
  studyList: Study[] | undefined
  onSetStudy: Function
}

export const StudyList: React.FC<StudyListProps> = ({ studyList, onSetStudy }) => {
  return (
    <Container>
      <Row className='g-5'>
        {studyList && studyList.map((study: Study, index: number) => 
          <Col key={index} xs={6} lg={3}>
            <StudyCard study={study} onSetStudy={onSetStudy} />
          </Col>
        )}
        {!studyList && <p>Empty List</p>}
      </Row>
    </Container>
  )
}