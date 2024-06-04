import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import StudyList from "./components/StudyList";
import StudyDetail from "./components/StudyDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <p>
            <Link to="/">CoMit Study</Link>
          </p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StudyList />}></Route>
            <Route path="/:index" element={<StudyDetail />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
