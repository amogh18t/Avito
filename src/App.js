import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontend from './pages/Frontend.js'
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path={'/'} element={<Frontend />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
