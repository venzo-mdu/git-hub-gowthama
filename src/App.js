import './App.css';
import SearchBar from './component/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from "./component/data"
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar />} />
        <Route exact path="/data" element={<Data />} />
      </Routes>
    </Router>

  );
}

export default App;
