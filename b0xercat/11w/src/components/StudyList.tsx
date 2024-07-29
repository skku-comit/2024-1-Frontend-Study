import CampusFilter from "./CampusFilter";
import StudyCard from "./StudyCard";
import { useState, useEffect } from "react";
import type { Study } from "../types";

export default function StudyList() {
  const [studyData, setStudyData] = useState<Study[]>([]);
  const [filteredData, setFilteredData] = useState<Study[]>([]);

  useEffect(() => {
    fetch("https://getstudy-he4kudccka-uc.a.run.app/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setStudyData(res);
        setFilteredData(res);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
      <CampusFilter data={studyData} onChange={setFilteredData} />
      <div id="card-wrapper">
        {filteredData.map((study, index) => {
          return <StudyCard key={index} {...study} index={index} />;
        })}
      </div>
    </>
  );
}
