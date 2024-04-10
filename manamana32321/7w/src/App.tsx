import { useState } from 'react'
import './App.css';

import { StudyList } from './components/StudyList';
import { data } from './data';
import StudyDetail from './components/StudyDetail';

function App() {
  const [studyTitle, setStudyTitle] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <a href='' className="text-center p-3 pt-4 fw-bold">
          <h2>CoMit Study</h2>
        </a>
      </header>
      <div id="content">
        {!studyTitle && <StudyList studyList={data} onSetStudyTitle={setStudyTitle}/>}
        {studyTitle && <StudyDetail studyTitle={studyTitle}/>}
      </div>
    </div>
  );
}

export default App;
