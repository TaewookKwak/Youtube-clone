import React, { useEffect, useState } from 'react'
import Primary from './primary'
import styles from './secondary.module.css'

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
          <img
            className={styles.thumbnail}
            src={`${video.snippet.thumbnails.medium.url}`}
          ></img>
          <span className={styles.title}>{video.snippet.title}</span>
          <span className={styles.channelTitle}>
            {video.snippet.channelTitle}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Secondary
