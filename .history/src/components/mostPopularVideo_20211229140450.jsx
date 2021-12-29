import React, { useEffect } from 'react'

function MostPopularVideo(props) {
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  })
  return <></>
}

export default MostPopularVideo
