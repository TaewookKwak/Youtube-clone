import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './routes/home'
import Video from './routes/video'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/video/:id" component={<Video />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
