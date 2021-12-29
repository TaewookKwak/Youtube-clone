import React from 'react'
import { Link } from 'react-router-dom'
function Video(props) {
  return (
    <>
      <Link to={`/video/${}`}>Post #1</Link>
  )
}

export default Video
