import './App.css';
import SearchBar from './component/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from "./component/data"
import Projects from './component/projects';
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar />} />
        <Route exact path="/data" element={<Data />} />
        <Route exact path="/projects" element={<Projects />} />

      </Routes>
    </Router>

  );
}

export default App;
