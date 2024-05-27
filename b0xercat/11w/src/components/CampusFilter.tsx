import { useState } from "react";
import type { Study } from "../types";

export default function CampusFilter({
  data,
  onChange,
}: {
  data: Study[];
  onChange: (data: Study[]) => void;
}) {
  const [currentCampus, setCurrentCampus] = useState<string>("전체");
  const campus = ["공통", "율전", "명륜", "온라인"];
  return (
    <div id="campus-filter">
      <div
        className="campus"
        style={{
          backgroundColor: currentCampus === "전체" ? "#dddddd" : "#f5f5f5",
        }}
        onClick={() => {
          onChange(data);
          setCurrentCampus("전체");
        }}
      >
        전체
      </div>
      {campus.map((campus) => {
        return (
          <div
            key={campus}
            className="campus"
            style={{
              backgroundColor: currentCampus === campus ? "#dddddd" : "#f5f5f5",
            }}
            onClick={() => {
              onChange(data.filter((study) => study.campus === campus));
              setCurrentCampus(campus);
            }}
          >
            {campus}
          </div>
        );
      })}
    </div>
  );
}
