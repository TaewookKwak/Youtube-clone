import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

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
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
          />
          <div>
            <h1>{current.snippet.title}</h1>
            <h1>{current.snippet.channelTitle}</h1>
            <h1>{current.snippet.description}</h1>
          </div>
        </>
      )}
    </>
  )
}

export default Detail
