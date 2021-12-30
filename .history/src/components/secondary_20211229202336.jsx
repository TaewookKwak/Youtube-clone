import React, { useEffect, useState } from 'react'
import Primary from './primary'

function Secondary({ channelId }) {
  const [videos, setVideo] = useState([])
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=viewCount&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [])
  return (
    <ul>
      {videos.map((video) => (
        <li>
          <img src={`${video.snippet.thumbnails.default.url}`}></img>
        </li>
      ))}
    </ul>
  )
}

export default Secondary
