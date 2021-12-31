import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom'
import './App.css'
import Home from './routes/home'
import Result from './routes/result'
import Video from './routes/video'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="Youtube-clone/" element={<Home />} />
          <Route path="Youtube-clone/result" element={<Result />} />
          <Route path="Youtube-clone/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
