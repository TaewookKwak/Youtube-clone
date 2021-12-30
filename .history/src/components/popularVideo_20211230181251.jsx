import React, { useEffect, useState } from 'react'
import styles from './css/popularVideo.module.css'
import { Link } from 'react-router-dom'

function PopularVideo({
  title,
  thumbnail,
  channelTitle,
  id,
  description,
  channelId,
}) {
  return (
    <li className={styles.video} key={id}>
      <Link
        to={`/video/${id}`}
        state={{
          title: title,
          id: id,
          channelTitle: channelTitle,
          thumbnail: thumbnail,
          description: description,
          channelId: channelId,
        }}
      >
        <img className={styles.thumbnail} src={thumbnail}></img>
      </Link>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
    </li>
  )
}

export default PopularVideo
