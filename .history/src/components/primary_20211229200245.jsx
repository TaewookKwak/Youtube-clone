import React from 'react'

function Primary({ id, title, channelTitle, description }) {
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
      <div>
        <h1>{title}</h1>
        <h3>{channelTitle}</h3>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Primary
