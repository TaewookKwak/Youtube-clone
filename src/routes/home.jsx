import React from 'react'
import PopularVideos from '../components/popularVideos'
import Search from '../components/searchBar'

function Home(props) {
  return (
    <>
      <Search />
      <PopularVideos />
    </>
  )
}

export default Home
