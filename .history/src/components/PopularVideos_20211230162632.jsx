import React, { useEffect, useState } from 'react'
import PopularVideo from './popularVideo'
import styles from './css/popularVideos.module.css'

export default function PopularVideos(props) {
  const [videos, setVideo] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyBp93AEk8HkVqJMA4c4AvAlDrbz9sQ8Tn8',
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
