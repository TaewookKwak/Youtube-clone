import React from 'react'
import { useLocation } from 'react-router-dom'
import Detail from '../components/detail'
import Search from '../components/searchBar'

function Video(props) {
  const data = location.state.data
  console.log(data)
  return (
    <>
      <Search />
      <Detail />
    </>
  )
}

export default Video
