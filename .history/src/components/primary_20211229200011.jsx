import React from 'react'

function Primary(props) {
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
        <h1>{current.snippet.title}</h1>
        <h3>{current.snippet.channelTitle}</h3>
        <p>{current.snippet.description}</p>
      </div>
    </>
  )
}

export default Primary
