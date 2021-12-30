import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './routes/home'
import Result from './routes/result'
import Video from './routes/video'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
