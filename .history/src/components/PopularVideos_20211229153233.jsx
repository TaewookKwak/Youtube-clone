import React, { useEffect, useState } from 'react'
import styles from './popularVideos.module.css'

export default function PopularVideos(props) {
  const [videos, setVideo] = useState([])
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
        setLoading(false)
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [])
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <ul className={styles.videos}>
          {videos.map((video) => {
            return (
              <li className={styles.video} key={video.id}>
                <img
                  className={styles.thumbnail}
                  src={video.snippet.thumbnails.medium.url}
                ></img>
                <span className={styles.title}>{video.snippet.title}</span>
                <span className={styles.channelTitle}>
                  {video.snippet.channelTitle}
                </span>
                <span>{video.snippet.publishedAt}</span>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
