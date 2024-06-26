import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StudyList from './components/StudyList';
import StudyDetail from './components/StudyDetail';

function App() {
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
              <StudyList />
            </Route>
            
            <Route path="/study/:studyId">
              <StudyDetail/>
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
