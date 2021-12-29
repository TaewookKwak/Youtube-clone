import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PopularVideos from './components/popularVideos'
import Search from './components/searchBar.jsx'

function App() {
  return (
    <div>
      <Search />
      <PopularVideos />
    </div>
  )
}

export default App
