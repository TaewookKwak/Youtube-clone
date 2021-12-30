import React, { useEffect, useState } from 'react'
import PopularVideo from './popularVideo'
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
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&q=bts&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
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
          {videos.map((video) => (
            <PopularVideo
              key={video.id}
              id={video.id}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
              channelTitle={video.snippet.channelTitle}
              description={video.snippet.description}
            />
          ))}
        </ul>
      )}
    </>
  )
}
