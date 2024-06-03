import React, { useState } from "react";
import { Study } from '../data.ts'
import { Button } from "@/components/ui/button"

const ALL_FILTER_TEXT = '전체'

interface FilterBadgeInterface {
  isToggled: boolean
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
  text: string
  studyData: Study[] | undefined
  setStudyList: React.Dispatch<React.SetStateAction<Study[]>>
}

const FilterBadge: React.FC<FilterBadgeInterface> = ({ isToggled, setSelectedFilter, text, studyData, setStudyList }) => {
  function filterStudyData() {
    if(text === ALL_FILTER_TEXT) {
      setStudyList(studyData || [])
    } else {
      setStudyList(studyData?.filter((study)=> study.campus === text) || [])
    }
    setSelectedFilter(text)
  }

  return <Button
    onClick={filterStudyData}
    variant={isToggled ? 'outline' : 'default'}
    className="rounded">
    {text}
  </Button>
}

interface CampusFilterInterface {
  className: string
  studyData: Study[] | undefined
  setStudyList: React.Dispatch<React.SetStateAction<Study[]>>
}

export const CampusFilter: React.FC<CampusFilterInterface> = ({ className, studyData, setStudyList }) => {
  const filterList = [ALL_FILTER_TEXT, '율전', '명륜', '공통', '온라인'];
  const [selectedFilter, setSelectedFilter] = useState(ALL_FILTER_TEXT)
  
  return <div className={className + ' flex justify-center gap-x-3'}>
    {filterList.map((filterText) => <FilterBadge
      key={filterText}
      isToggled={selectedFilter===filterText}
      setSelectedFilter={setSelectedFilter}
      text={filterText}
      studyData={studyData}
      setStudyList={setStudyList}/>)}
  </div>
}