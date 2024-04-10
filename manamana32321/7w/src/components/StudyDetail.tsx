interface StudyDetailProps {
  studyTitle: string
}

const StudyDetail: React.FC<StudyDetailProps> = ({ studyTitle }) => {
  return <>
    {studyTitle}
  </>
}

export default StudyDetail