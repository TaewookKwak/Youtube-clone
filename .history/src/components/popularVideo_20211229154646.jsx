import React from 'react'

function PopularVideo({ key, title, thumbnail, channelTitle }) {
  return (
    <li className={styles.video} key={key}>
      <img className={styles.thumbnail} src={thumbnail}></img>
      <span className={styles.title}>{video.snippet.title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
    </li>
  )
}

export default PopularVideo
