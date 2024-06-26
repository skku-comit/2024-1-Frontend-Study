import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StudyList } from './components/StudyList';
import { data, Study } from './data';
import StudyDetail from './components/StudyDetail';

function App() {
  const [studyList, setStudyList] = useState<Study[]>([])

  useEffect(() => {
    setStudyList(data)
  }, [])
  

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <a href='/' className="text-center p-3 pt-4 fw-bold">
            <h2>CoMit Study</h2>
          </a>
        </header>

        <main id="content">
          <Switch>
            <Route exact path="/">
              <StudyList studyList={studyList}/>
            </Route>
            
            <Route path="/study/:studyTitle">
              <StudyDetail studyList={studyList} />
            </Route>

            <Route>
              <p>Error: 404</p>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
