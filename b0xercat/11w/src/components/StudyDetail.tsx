import { useParams } from "react-router-dom";
import { FaSchoolFlag } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiStackOverflowLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import type { Study } from "../types";

export default function StudyDetail() {
  const [study, setStudy] = useState<Study>();
  const { index } = useParams();

  useEffect(() => {
    fetch(`https://getstudy-he4kudccka-uc.a.run.app/${index}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setStudy(res);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [index]);

  return (
    <main>
      {study ? (
        <>
          <img src={study!.imageSrc} alt={study!.title} width={300} />
          <h1>{study!.title}</h1>
          <div id="info-wrapper">
            <p>
              <MdOutlineSignalCellularAlt /> {study!.level}
            </p>
            <p>
              <FaSchoolFlag /> {study!.campus}
            </p>
            <p>
              <IoPersonSharp /> {study!.mentor}
            </p>
            <p>
              <RiStackOverflowLine /> {study!.stack.join(", ")}
            </p>
          </div>
          <p id="description">{study!.description}</p>{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
