import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Study } from '../data'

const ALL_FILTER_TEXT = '전체'

interface FilterBadgeInterface {
  isToggled: boolean
  setSelectedFilter: Function
  text: string
  studyData: Study[] | undefined
  setStudyData: Function
}

const FilterBadge: React.FC<FilterBadgeInterface> = ({ isToggled, setSelectedFilter, text, studyData, setStudyData }) => {
  function filterStudyData() {
    const filteredStudyData = text === ALL_FILTER_TEXT ? studyData : studyData?.filter((study)=> study.campus === text) || []
    setStudyData(filteredStudyData)
    setSelectedFilter(text)
  }

  return <Button onClick={filterStudyData} variant={isToggled ? 'outline-primary' : ''}>
    {text}
  </Button>
}

interface CampusFilterInterface {
  studyData: Study[] | undefined
  setStudyData: Function
}

export const CampusFilter: React.FC<CampusFilterInterface> = ({ studyData, setStudyData }) => {
  const filterList = [ALL_FILTER_TEXT, '율전', '명륜', '공통', '온라인'];
  const [selectedFilter, setSelectedFilter] = useState(ALL_FILTER_TEXT)
  
  return <Container className='mb-3 d-flex justify-content-center'>
    {filterList.map((filterText) => <FilterBadge
      key={filterText}
      isToggled={selectedFilter===filterText}
      setSelectedFilter={setSelectedFilter}
      text={filterText}
      studyData={studyData}
      setStudyData={setStudyData}/>)}
  </Container>
}