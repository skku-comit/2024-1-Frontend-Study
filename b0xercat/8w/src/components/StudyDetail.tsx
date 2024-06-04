import { useParams } from "react-router-dom";
import { data } from "../data";
import { FaSchoolFlag } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiStackOverflowLine } from "react-icons/ri";

export default function StudyDetail() {
  const index = Number(useParams().index);
  const study = data[index];
  return (
    <main>
      <img src={study.imageSrc} alt={study.title} width={300} />
      <h1>{study.title}</h1>
      <div id="info-wrapper">
        <p>
          <MdOutlineSignalCellularAlt /> {study.level}
        </p>
        <p>
          <FaSchoolFlag /> {study.campus}
        </p>
        <p>
          <IoPersonSharp /> {study.mentor}
        </p>
        <p>
          <RiStackOverflowLine /> {study.stack.join(", ")}
        </p>
      </div>
      <p id="description">{study.description}</p>
    </main>
  );
}
