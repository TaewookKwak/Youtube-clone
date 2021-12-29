import React from 'react'
import styles from './popularVideo.module.css'
3import { Link } from 'react-router-dom'

function PopularVideo({ key, title, thumbnail, channelTitle, key }) {
  return (
    <li className={styles.video} key={key}>
      <Link to={`/video/${key}`}>
        <img className={styles.thumbnail} src={thumbnail}></img>
      </Link>

      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
    </li>
  )
}

export default PopularVideo
