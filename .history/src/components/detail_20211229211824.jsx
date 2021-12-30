import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Primary from './primary'
import Secondary from './secondary'
import styles from './detail.module.css'
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
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
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
        console.log(video.id)
        setLoading(false)
      }
    })
  }, [videos])
  useEffect(() => {
    console.log(current)
  }, [loading])

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
