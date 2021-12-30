import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Detail from '../components/detail'
import Search from '../components/searchBar'

function Video(props) {
  const location = useLocation()

  let data = location
  console.log(`render 비디오${data}`)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Search />
      <Detail data={data} />
    </>
  )
}

export default Video
