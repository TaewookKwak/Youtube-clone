import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const [videos, setVideo] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams
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
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Detail
