import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Primary from './primary'

function Detail() {
  const { id } = useParams()
  const location = useLocation()
  //   const { title } = location.state
  const [videos, setVideo] = useState([])
  const [current, setCurrent] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [])
  useEffect(() => {
    videos.map((video) => {
      if (video.id === id) {
        setCurrent(video)
        console.log(video.id)
        setLoading(false)
      }
    })
  }, [videos])
  useEffect(() => {
    console.log(current)
  }, [loading])

  return (
    <>
      {loading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <Primary></Primary>
        </>
      )}
    </>
  )
}

export default Detail
