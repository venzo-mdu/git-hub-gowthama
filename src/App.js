import './App.css';
import SearchBar from './component/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from "./component/data"
import Projects from './component/projects';
import ProjectsDetails from './component/todo'
import Details from './component/deatils'

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar />} />
        <Route exact path="/data" element={<Data />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/ProjectsDetails" element={<ProjectsDetails />} />
        <Route exact path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
