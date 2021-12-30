import React, { useEffect, useState } from 'react'
import Primary from './primary'
import styles from './css/secondary.module.css'
import { Link } from 'react-router-dom'

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
        <li key={video.etag} className={styles.playlist_video}>
          <Link
            to={`/video/${video.id.videoId}`}
            state={{
              title: video.snippet.title,
              id: video.id,
              channelTitle: video.snippet.channelTitle,
              thumbnail: video.snippet.thumbnail,
              description: video.snippet.description,
              channelId: video.snippet.channelId,
            }}
          >
            <img
              className={styles.thumbnail}
              src={`${video.snippet.thumbnails.medium.url}`}
            />
          </Link>
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
