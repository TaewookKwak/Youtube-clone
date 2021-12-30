import React, { useEffect, useState } from 'react'
import SearchVideo from './searchVideo'
import styles from './css/searchVideos.module.css'
import { useParams } from 'react-router-dom'

export default function SearchVideos(props) {
  const [videos, setVideo] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    console.log(props.data)

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.data}&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [props])
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <ul className={styles.videos}>
          {videos.map((video) => (
            <SearchVideo
              key={video.etag}
              id={video.id}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
              channelTitle={video.snippet.channelTitle}
              channelId={video.snippet.channelId}
              description={video.snippet.description}
            />
          ))}
        </ul>
      )}
    </>
  )
}
