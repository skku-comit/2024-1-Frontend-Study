import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StudyList } from './components/StudyList';
import { data, Study } from './data';
import StudyDetail from './components/StudyDetail';

function App() {
  const [study, setStudy] = useState<Study>()
  const [studyList, setStudyList] = useState<Study[]>([])

  useEffect(() => {
    setStudyList(data)
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <a href='/' className="text-center p-3 pt-4 fw-bold">
          <h2>CoMit Study</h2>
        </a>
      </header>

      <main id="content">
        {!study && <StudyList studyList={studyList} onSetStudy={setStudy}/>}
        {study && <StudyDetail study={study}/>}
      </main>
    </div>
  );
}

export default App;
