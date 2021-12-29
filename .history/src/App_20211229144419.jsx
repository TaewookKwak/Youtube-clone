import './App.css'
import MostPopularVideosfrom './components/mostPopularVideo'
import Search from './components/searchBar'

function App() {
  return (
    <div>
      <Search />
      <MostPopularVideos />
    </div>
  )
}

export default App
