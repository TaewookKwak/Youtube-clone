import React, { useEffect, useState } from 'react'
import SearchVideo from './searchVideo'
import styles from './searchVideos.module.css'

export default function SearchVideos(props) {
  const [videos, setVideo] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
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
            <SearchVideo
              key={video.id.videoId}
              id={video.id.videoId}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
              channelTitle={video.snippet.channelTitle}
            />
          ))}
        </ul>
      )}
    </>
  )
}
