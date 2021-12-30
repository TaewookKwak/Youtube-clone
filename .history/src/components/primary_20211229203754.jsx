import React from 'react'
import styles from './primary.module.css'
function Primary({ id, title, channelTitle, description }) {
  return (
    <section className={styles.primary}>
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
      <div className={styles.metadata}>
        <h1>{title}</h1>
        <h3>{channelTitle}</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Primary
