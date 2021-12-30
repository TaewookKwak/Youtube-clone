import React from 'react'
import styles from './css/searchVideo.module.css'
import { Link } from 'react-router-dom'

function SearchVideo({ key, title, thumbnail, channelTitle, id }) {
  return (
    <li className={styles.video} key={id}>
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
