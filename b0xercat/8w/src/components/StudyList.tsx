import { data } from "../data";
import CampusFilter from "./CampusFilter";
import StudyCard from "./StudyCard";
import { useState, useEffect } from "react";

interface Study {
  imageSrc: string;
  title: string;
  mentor: string;
  level: string;
  stack: string[];
  campus: string;
  description: string;
}

export default function StudyList() {
  const [studyData, setStudyData] = useState<Study[]>([]);

  useEffect(() => {
    setStudyData(data);
  }, []);

  return (
    <>
      <CampusFilter data={data} onChange={setStudyData} />
      <div id="card-wrapper">
        {studyData.map((study, index) => {
          return <StudyCard key={index} {...study} index={index} />;
        })}
      </div>
    </>
  );
}
