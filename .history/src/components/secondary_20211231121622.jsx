import React, { useEffect, useState } from 'react'
import Primary from './primary'
import styles from './css/secondary.module.css'
import { Link } from 'react-router-dom'

function Secondary({ channelId }) {
  const [videos, setVideo] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    setLoading(true)
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=viewCount&key=AIzaSyC8vpMz8pM3_yty2NYPNl8CeXNGMb39U_0`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
    console.log(`render 세컨더리 fetch`)
    setLoading(false)
  }, [])
  console.log(`render 세컨더리`)
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
