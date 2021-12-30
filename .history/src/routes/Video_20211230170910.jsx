import React from 'react'
import Detail from '../components/detail'
import Search from '../components/searchBar'

function Video({ location }) {
  console.log(location)
  return (
    <>
      <Search />
      <Detail />
    </>
  )
}

export default Video
