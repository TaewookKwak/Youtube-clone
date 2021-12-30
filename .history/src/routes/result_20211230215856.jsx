import React from 'react'
import Search from '../components/searchBar'
import { useLocation } from 'react-router-dom'
import SearchVideos from '../components/searchVideos'

function Result(props) {
  const location = useLocation()
  const data = location
  console.log(`render 결과${data}`)
  return (
    <>
      <Search />
    </>
  )
}

export default Result
