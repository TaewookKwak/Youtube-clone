import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const [videos, setVideo] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const [currentVideo, setCurrentVideo] = useState([])
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
        setLoading(false)
        setVideo(result.items)
        videos.map((video) => {
          if (video.id === id) {
            setCurrentVideo(video)
            console.log(currentVideo)
          }
        })
      })
      .catch((error) => console.log('error', error))
  }, [])

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
            <h1>{currentVideo.title}</h1>
          </div>
        </>
      )}
    </>
  )
}

export default Detail
