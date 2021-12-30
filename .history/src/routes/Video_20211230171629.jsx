import React from 'react'
import Detail from '../components/detail'
import Search from '../components/searchBar'

function Video({ location }) {
  const a = location
  console.log(a.title)
  return (
    <>
      <Search />
      <Detail />
    </>
  )
}

export default Video
