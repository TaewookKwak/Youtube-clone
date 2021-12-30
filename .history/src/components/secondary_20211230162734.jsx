import React, { useEffect, useState } from 'react'
import Primary from './primary'
import styles from './css/secondary.module.css'

function Secondary({ channelId }) {
  const [videos, setVideo] = useState([])
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=viewCount&key=AIzaSyBp93AEk8HkVqJMA4c4AvAlDrbz9sQ8Tn8`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [])
  return (
    <ul className={styles.playlist}>
      {videos.map((video) => (
        <li className={styles.playlist_video}>
          <img
            className={styles.thumbnail}
            src={`${video.snippet.thumbnails.medium.url}`}
          ></img>
          <div className={styles.metadata}>
            <span className={styles.title}>{video.snippet.title}</span>
            <span className={styles.channelTitle}>
              {video.snippet.channelTitle}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Secondary
