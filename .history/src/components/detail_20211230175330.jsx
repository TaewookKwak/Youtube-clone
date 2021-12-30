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

  useEffect(() => {
    setLoading(true)
    console.log(props.data.state)
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
            title={props.data.state.title}
            channelTitle={props.data.state.channelTitle}
            description={props.data.state.description}
          />
          <Secondary channelId={props.data.state.channelId} />
        </div>
      )}
    </>
  )
}

export default Detail
