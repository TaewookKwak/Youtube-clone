import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Primary from './primary'
import Secondary from './secondary'
import styles from './css/detail.module.css'
function Detail() {
  const { id } = useParams()
  const [videos, setVideo] = useState([])
  const [current, setCurrent] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=KR&key=AIzaSyBp93AEk8HkVqJMA4c4AvAlDrbz9sQ8Tn8',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [])
  useEffect(() => {
    videos.map((video) => {
      if (video.id === id) {
        setCurrent(video)
        setLoading(false)
      }
    })
  }, [videos])
  useEffect(() => {}, [loading])

  return (
    <>
      {loading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <div className={styles.video}>
          <Primary
            id={id}
            title={current.snippet.title}
            channelTitle={current.snippet.channelTitle}
            description={current.snippet.description}
          />
          <Secondary channelId={current.snippet.channelId} />
        </div>
      )}
    </>
  )
}

export default Detail
