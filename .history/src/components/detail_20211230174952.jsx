import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Primary from './primary'
import Secondary from './secondary'
import styles from './css/detail.module.css'
function Detail(props) {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [current, setCurrent] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(props.data.state)

  useEffect(() => {
    setLoading(true)
    setData(props.data.state)
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <div className={styles.video}>
          <Primary
            id={data.id}
            title={data.title}
            channelTitle={data.channelTitle}
            description={data.description}
          />
          <Secondary channelId={data.channelId} />
        </div>
      )}
    </>
  )
}

export default Detail