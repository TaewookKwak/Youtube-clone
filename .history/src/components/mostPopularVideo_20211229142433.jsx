import React, { useEffect, useState } from 'react'

function MostPopularVideo(props) {
  const [data, setDate] = useState([])
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
      .then((result) => setDate(result))
      .catch((error) => console.log('error', error))
  }, [])
  return (
    <>
      {data.items.map((video) => {
        return (
        <img src={video.snippet.thumbnails.default.url}></img>
        <h1>{video.snippet.title}</h1>

        )
      })}
    </>
  )
}

export default MostPopularVideo
