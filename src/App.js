import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
