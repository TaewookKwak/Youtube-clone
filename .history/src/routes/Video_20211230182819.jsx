import React from 'react'
import { useLocation } from 'react-router-dom'
import Detail from '../components/detail'
import Search from '../components/searchBar'

function Video(props) {
  const location = useLocation()
  const data = location
  console.log(`render 비디오${data}`)
  return (
    <>
      <Search />
      <Detail data={data} />
    </>
  )
}

export default Video
