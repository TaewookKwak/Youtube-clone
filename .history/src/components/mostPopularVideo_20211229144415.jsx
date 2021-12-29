import React, { useEffect, useState } from 'react'

function MostPopularVideos(props) {
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
          <li key={video.id}>
            <img src={video.snippet.thumbnails.default.url}></img>
            <span>{video.snippet.title}</span>
          </li>
        )
      })}
    </>
  )
}

export default MostPopularVideo
