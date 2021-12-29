import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PopularVideos from './components/popularVideos'
import Search from './components/searchBar.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Search />
            <PopularVideos />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
