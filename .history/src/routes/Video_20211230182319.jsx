import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Detail from '../components/detail'
import Search from '../components/searchBar'

function Video(props) {
  useEffect(() => {
    const location = useLocation()
    const data = location
  }, [])
  return (
    <>
      <Search />
      <Detail data={data} />
    </>
  )
}

export default Video
