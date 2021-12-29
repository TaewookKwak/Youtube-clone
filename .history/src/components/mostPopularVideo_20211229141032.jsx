import React, { useEffect, useState } from 'react'

function MostPopularVideo(props) {
  const [state, setstate] = useState(initialState)
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
  return <>{console.log(result.items)}</>
}

export default MostPopularVideo
