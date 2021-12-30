import React from 'react'
import styles from './searchVideo.module.css'
import { Link } from 'react-router-dom'

function SearchVideo({ key, title, thumbnail, channelTitle, id, description }) {
  return (
    <li className={styles.video} key={key}>
      <Link
        to={{
          pathname: `/video/${id}`,
          state: {
            title: { title },
          },
        }}
      >
        <img className={styles.thumbnail} src={thumbnail}></img>
      </Link>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
    </li>
  )
}

export default SearchVideo
