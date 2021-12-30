import React, { useEffect } from 'react'

function Secondary(props) {
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjmJDM5pRKbUlVIzDYYWb6g&maxResults=10&order=viewCount&key=AIzaSyATnJJe08YFVjwP6spvks6-sPL4xpTCuVg',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideo(result.items)
      })
      .catch((error) => console.log('error', error))
  }, [])
  return <div>H</div>
}

export default Secondary
