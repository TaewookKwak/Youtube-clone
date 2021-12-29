import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './routes/home'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/video/:id" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
