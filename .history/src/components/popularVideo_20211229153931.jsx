import React from 'react'

function PopularVideo(props) {
  return (
    <li className={styles.video} key={video.id}>
      <img
        className={styles.thumbnail}
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <span className={styles.title}>{video.snippet.title}</span>
      <span className={styles.channelTitle}>{video.snippet.channelTitle}</span>
    </li>
  )
}

export default PopularVideo
