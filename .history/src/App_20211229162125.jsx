import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/home'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
