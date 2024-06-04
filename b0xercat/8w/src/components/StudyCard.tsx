import Badge from "./Badge";
import { Link } from "react-router-dom";

interface StudyCardProps {
  imageSrc: string;
  title: string;
  campus: string;
  stack: string[];
  level: string;
  index: number;
}

export default function StudyCard({
  imageSrc,
  title,
  campus,
  stack,
  level,
  index,
}: StudyCardProps) {
  const badges = [level, stack[0], campus];
  return (
    <Link to={`/${index}`}>
      <div className="card">
        <div>
          <img src={imageSrc} alt={title} width={144} height={144}></img>
        </div>
        <h3>{title}</h3>
        <div className="badge-wrapper">
          {badges.map((badge, index: number) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
