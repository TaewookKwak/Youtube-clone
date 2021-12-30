import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './routes/home'
import Video from './routes/Video'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
