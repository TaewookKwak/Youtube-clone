import React from 'react'
import styles from './popularVideo.module.css'

function PopularVideo({ key, title, thumbnail, channelTitle }) {
  return (
    <li className={styles.video} key={key}>
      <img className={styles.thumbnail} src={thumbnail}></img>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
    </li>
  )
}

export default PopularVideo