import React from 'react'
import styles from './css/primary.module.css'
function Primary({ id, title, channelTitle, description }) {
  console.log(`render 프라이머리`)
  return (
    <section className={styles.primary}>
      <iframe
        className={styles.video}
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
      <div className={styles.metadata}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.channelTitle}>{channelTitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

export default Primary
