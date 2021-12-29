import React from 'react'
import PopularVideos from './popularVideos'
import Search from './searchBar'

function Home(props) {
  return (
    <>
      <Search />
      <PopularVideos />
    </>
  )
}

export default Home
