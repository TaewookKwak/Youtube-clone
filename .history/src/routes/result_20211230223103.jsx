import React from 'react'
import Search from '../components/searchBar'
import { useLocation } from 'react-router-dom'
import SearchVideos from '../components/searchVideos'

function Result(props) {
  const location = useLocation()
  let data = location
  console.log(`render 결과${data.state}`)
  return (
    <>
      <Search />
    </>
  )
}

export default Result
